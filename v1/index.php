<?php

require_once '../libs/flight/Flight.php';

require_once '../include/security/DB_Security.php';
require_once '../include/utils/Request_Utils.php';

require_once '../include/db/handlers/UsersHandler.php';
require_once '../include/db/handlers/TimerHandler.php';
require_once '../include/db/handlers/BankInfoHandler.php';
require_once '../include/db/handlers/ShippingInfoHandler.php';

require_once '../include/security/UUID.php';
require_once '../include/security/API.php';

require_once '../include/model/ShippingInfo.php';
require_once '../include/model/BankInfo.php';

/**
 * METHOD MAPPING
 */

// Send error status & message via json
Flight::map('jsonError', function ($error, $message) {
    Flight::json(
        $response = array(
            'error' => $error,
            'error_message' => $message
        ));
});

/**
 * Get all users
 *
 * Required params:
 *                  name(string),
 *                  surname(string),
 *                  email(string),
 *                  phone(string),
 *                  username(string),
 *                  password(string),
 *                  refer(string),
 *
 *                  shipping_name,
 *                  shipping_surname,
 *                  shipping_address,
 *                  shipping_city,
 *                  shipping_postal_code,
 *                  shipping_country,
 *                  shipping_phone,
 *
 *                  bank_name,
 *                  bank_surname,
 *                  bank_iban,
 *                  bank_swift_code,
 *                  bank_paypal,
 *                  bank_debit_card,
 *                  bank_personal_code
 */
Flight::route('POST /register', function () {
    verifyRequiredParams(array(
        // Main info
        'name',
        'surname',
        'email',
        'phone',
        'username',
        'password',
        'refer',

        // Shipping info
        'shipping_name',
        'shipping_surname',
        'shipping_address',
        'shipping_city',
        'shipping_postal_code',
        'shipping_country',
        'shipping_phone',

        // Bank info
        'bank_name',
        'bank_surname',
        'bank_iban',
        'bank_swift_code',
        'bank_paypal',
        'bank_debit_card',
        'bank_personal_code',
    ));

    $dbConnection = DbConnect::connect();

    $userHandler = new UsersHandler($dbConnection);
    $timerHandler = new TimerHandler($dbConnection);
    $shippingHandler = new ShippingInfoHandler($dbConnection);
    $bankInfoHandler = new BankInfoHandler($dbConnection);

    // Main info
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $refer = $_POST['refer'];

    // Shipping info
    $shippingName = $_POST['shipping_name'];
    $shippingSurname = $_POST['shipping_surname'];
    $shippingAddress = $_POST['shipping_address'];
    $shippingCity = $_POST['shipping_city'];
    $shippingPostalCode = $_POST['shipping_postal_code'];
    $shippingCountry = $_POST['shipping_country'];
    $shippingPhone = $_POST['shipping_phone'];

    // Bank info
    $bankName = $_POST['bank_name'];
    $bankSurname = $_POST['bank_surname'];
    $bankIban = $_POST['bank_iban'];
    $bankSwiftCode = $_POST['bank_swift_code'];
    $bankPaypal = $_POST['bank_paypal'];
    $bankDebitCard = $_POST['bank_debit_card'];
    $bankPersonalCode = $_POST['bank_personal_code'];

    // Additional info
    $uuid = UUID::generate_v4();
    $apiKey = API::generate_key();
    $clientSecret = API::generate_secret();
    $createdAt = date("Y-m-d H:i:s");
    $lastLogin = date("Y-m-d H:i:s");
    $isOnline = 1;

    $user = new User(
        $uuid,
        $apiKey,
        $clientSecret,
        $name,
        $surname,
        $email,
        $phone,
        $username,
        md5($password),
        $refer,
        $createdAt,
        $lastLogin,
        $isOnline
    );

    $shippingInfo = new ShippingInfo(
        $uuid,
        $shippingName,
        $shippingSurname,
        $shippingAddress,
        $shippingCity,
        $shippingPostalCode,
        $shippingCountry,
        $shippingPhone
    );

    $bankInfo = new BankInfo(
        $uuid,
        $bankName,
        $bankSurname,
        $bankIban,
        $bankSwiftCode,
        $bankPaypal,
        $bankDebitCard,
        $bankPersonalCode
    );

    $timer = new Timer(
        $createdAt,
        $uuid
    );

    if (!$userHandler->addItem($user) || !$timerHandler->addItem($timer) ||
        !$shippingHandler->addItem($shippingInfo) || !$bankInfoHandler->addItem($bankInfo)
    ) {
        Flight::jsonError(true, "Error occurred during registration");
    }

    Flight::json(addErrorStatusToArray(
        $userHandler->getUserByUUID($uuid, false, array('username', 'password')), false, ""));
});

Flight::route('POST /login', function () {
    verifyRequiredParams(array('username', 'password'));
    $dbSecurity = new DB_Security();
    $userHandler = new UsersHandler(DbConnect::connect());

    $username = $_POST['username'];
    $password = $_POST['password'];
    $user = $userHandler->getUserByUsername($username);

    if ($user == NULL) {
        Flight::jsonError(true, "Bad username or password");
    }

    if (!$dbSecurity->validatePassword($password, $user['password'])) {
        Flight::jsonError(true, "Bad username or password");
    }

    $updateResult = $userHandler->update(
        array('is_online', 'last_login'),
        array(1, date("Y-m-d H:i:s")),
        array('uuid', $user['uuid'])
    );

    Flight::json($updateResult ?
        addErrorStatusToArray($userHandler->getUserByUUID($user['uuid'], false, array('username', 'password')), false, "") :
        addErrorStatusToArray(array(), true, "Error occurred. Please, try again later.")
    );
});

/**
 * Get all users
 *
 * Required params:
 *                  limit(int),
 *                  offset(int)
 */
Flight::route('GET /users', function () {
    verifyRequiredParams(array('api_key', 'limit', 'offset', 'signature'));
    $userHandler = new UsersHandler(DbConnect::connect());
    $dbSecurity = new DB_Security($userHandler->getConnection());

    $limit = $_GET['limit'];
    $offset = $_GET['offset'];
    $apiKey = $_GET['api_key'];
    $signature = $_GET['signature'];

    if (!$dbSecurity->verifyUserApiKey($apiKey)) {
        Flight::jsonError(true, 'Bad api key');
    }

    if (!$dbSecurity->validateSignature(array($limit, $offset), $signature, $apiKey)) {
        Flight::jsonError(true, 'Bad signature');
    }

    Flight::json($userHandler->getAll($userHandler->getPrivateSchema()));
});

Flight::route('/test', function () {
});

/**
 * Get timer of user
 */
Flight::route('GET /timer', function () {
    verifyRequiredParams(array('uuid'));

    $timerHandler = new TimerHandler(DbConnect::connect());
    $dbSecurity = new DB_Security($timerHandler->getConnection());

    $user_uuid = $_GET['uuid'];

    Flight::json($timerHandler->getTimerByUserId($user_uuid));
});
Flight::start();