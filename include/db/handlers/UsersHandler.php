<?php

require_once 'AbstractHandler.php';
require_once dirname(__DIR__) . "/../model/User.php";

class UsersHandler extends AbstractHandler
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    /**
     * OVERRIDE
     */

    public function getAll($ignore_fields = array())
    {
        $sql = "SELECT * FROM users";
        $response = array();
        $result = $this->getConnection()->query($sql);

        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $response[] = $this->removeIgnoreFields($row, $ignore_fields);
        }

        return $response;
    }

    protected function getTableName()
    {
        return 'users';
    }

    protected function getTableSchema()
    {
        return array(
            'uuid',
            'api_key',
            'client_secret',
            'name',
            'surname',
            'username',
            'password',
        );
    }

    public function getConnection()
    {
        return $this->connection;
    }

    protected function convertToObject($mysql_result)
    {
        return new User(
            $mysql_result['uuid'],
            $mysql_result['api_key'],
            $mysql_result['client_secret'],
            $mysql_result['name'],
            $mysql_result['surname']
        );
    }

    protected function removeIgnoreFields($mysql_result, $ignoreFields)
    {
        if (!isset($ignoreFields) || !isset($mysql_result)) {
            return $mysql_result;
        }

        foreach ($ignoreFields as $ignoreField) {
            unset($mysql_result[$ignoreField]);
        }

        return $mysql_result;
    }


    /**
     * SELF
     */

    public function getUserByUUID($uuid, $convertToObject = false, $ignoreFields = array())
    {
        $sql = "SELECT * FROM users WHERE BINARY uuid='$uuid'";
        $result = $this->getConnection()->query($sql)->fetch_assoc();

        if (!isset($result)) {
            return NULL;
        }

        $result = $this->removeIgnoreFields($result, $ignoreFields);

        if ($convertToObject) {
            return $this->convertToObject($result);
        } else {
            return $result;
        }
    }

    public function getUserByUsername($username, $convertToObject = false, $ignoreFields = array())
    {
        $sql = "SELECT * FROM users WHERE BINARY username='$username'";
        $result = $this->getConnection()->query($sql)->fetch_assoc();

        if (!isset($result)) {
            return NULL;
        }

        $result = $this->removeIgnoreFields($result, $ignoreFields);

        if ($convertToObject) {
            return $this->convertToObject($result);
        } else {
            return $result;
        }
    }
}