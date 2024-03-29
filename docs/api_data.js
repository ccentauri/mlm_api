define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "description": "<p>Get API key, client secret and UUID by username and password</p>",
    "name": "PostLogin",
    "group": "Basic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "main_info",
            "description": "<p>Main user's info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bank_info",
            "description": "<p>Bank info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "shipping_info",
            "description": "<p>Shipping info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Basic"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "description": "<p>Register in the app.</p>",
    "name": "PostRegister",
    "group": "Basic",
    "parameter": {
      "fields": {
        "Main info": [
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number in international format.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Main info",
            "type": "String",
            "optional": false,
            "field": "refer",
            "description": "<p>Username of the referrer.</p>"
          },
          {
            "group": "Main info",
            "type": "Object",
            "optional": false,
            "field": "Multipart",
            "description": "<p>file - user's photo.</p>"
          }
        ],
        "Shipping info": [
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_surname",
            "description": "<p>Surname.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_address",
            "description": "<p>Full address.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_city",
            "description": "<p>City.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_postal_code",
            "description": "<p>Postal code.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_country",
            "description": "<p>Country.</p>"
          },
          {
            "group": "Shipping info",
            "type": "String",
            "optional": false,
            "field": "shipping_phone",
            "description": "<p>Phone number in international format.</p>"
          }
        ],
        "Bank info": [
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_surname",
            "description": "<p>Surname.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_iban",
            "description": "<p>IBAN.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_swift_code",
            "description": "<p>Swift code.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_paypal",
            "description": "<p>Paypal email.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_debit_card",
            "description": "<p>Number of debit card.</p>"
          },
          {
            "group": "Bank info",
            "type": "String",
            "optional": false,
            "field": "bank_personal_code",
            "description": "<p>Personal code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "main_info",
            "description": "<p>Main user's info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "bank_info",
            "description": "<p>Bank info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "shipping_info",
            "description": "<p>Shipping info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Basic"
  },
  {
    "type": "post",
    "url": "/dialogs/create",
    "title": "Create dialog",
    "description": "<p>Create new dialog with specified user.</p>",
    "name": "GetCreateDialog",
    "group": "Dialogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "peer_uuid",
            "description": "<p>Peer UUID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - peer_uuid, secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dialog",
            "description": "<p>Dialog.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Dialogs"
  },
  {
    "type": "get",
    "url": "/dialogs",
    "title": "Get dialogs",
    "description": "<p>Get user's list of dialogs.</p>",
    "name": "GetDialog",
    "group": "Dialogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Result limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Result offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - limit, offset, secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "dialogs",
            "description": "<p>Dialogs.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Dialogs"
  },
  {
    "type": "get",
    "url": "/dialogs/:id",
    "title": "Get dialog by id",
    "description": "<p>Get one dialog by its id.</p>",
    "name": "GetDialogById",
    "group": "Dialogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - id (path), secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dialog",
            "description": "<p>Dialog.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Dialogs"
  },
  {
    "type": "get",
    "url": "/messages/:dialog_id",
    "title": "Get dialog messages",
    "description": "<p>Get list of dialog messages.</p>",
    "name": "GetMessagesOfDialog",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Result limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Result offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - limit, offset, secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Messages.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/:message_id/important",
    "title": "Mark as important",
    "description": "<p>Mark message as important or common.</p>",
    "name": "PostMarkMessageAsImportant",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "important",
            "description": "<p>0 - mark as common, 1 - mark as important.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - message_id (path), important ,secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/:message_id/read",
    "title": "Mark as read",
    "description": "<p>Mark message as read.</p>",
    "name": "PostMarkMessageAsRead",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - id (path), secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/send",
    "title": "Send message",
    "description": "<p>Send message.</p>",
    "name": "PostSendMessage",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>Dialog to send message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message body.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>MD5 signature - dialog_id, secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender_uuid",
            "description": "<p>Sender UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipient_uuid",
            "description": "<p>Recipient UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>Message's dialog id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "important",
            "description": "<p>Message important state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "read_state",
            "description": "<p>Message read state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/restore/code",
    "title": "Request code",
    "description": "<p>Request code generation.</p>",
    "name": "PostRequestCodeGen",
    "group": "Password_restore",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email for password restoring.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Password_restore"
  },
  {
    "type": "post",
    "url": "/password/change",
    "title": "Change password",
    "description": "<p>Change password with restore code.</p>",
    "name": "PostRestorePassword",
    "group": "Password_restore",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email for password restoring.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restore_code",
            "description": "<p>Restore code for password changing.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error information</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "error.error",
            "description": "<p>Error status</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error.error_message",
            "description": "<p>Description of the error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "error.error_code",
            "description": "<p>Identifier of the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "Password_restore"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>User's API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-30",
            "optional": false,
            "field": "limit",
            "description": "<p>Result limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Result offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>Signature of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of user profiles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mlm_rest_api/v1/index.php",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "mlm_rest_api/docs/main.js",
    "group": "_home_simple_Projects_PhpstormProjects_mlm_rest_api_docs_main_js",
    "groupTitle": "_home_simple_Projects_PhpstormProjects_mlm_rest_api_docs_main_js",
    "name": ""
  }
] });
