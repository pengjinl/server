define({ "api": [
  {
    "type": "get",
    "url": "/login/getmail",
    "title": "获取邮件验证码",
    "group": "login:登录",
    "name": "获取邮件验证码",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/login/getmail"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "usermail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\",\n   \"msg\":'邮件验证码发送成功'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/login.js",
    "groupTitle": "login:登录"
  },
  {
    "type": "get",
    "url": "/login/mail",
    "title": "邮件验证码登录",
    "group": "login:登录",
    "name": "邮件验证码登录",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/login/mail"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "usermail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/login.js",
    "groupTitle": "login:登录"
  },
  {
    "type": "get",
    "url": "/register/mail",
    "title": "邮箱注册",
    "group": "register:注册",
    "name": "邮箱注册",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/register/mail"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\",\n   \"msg\":'注册成功'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/register.js",
    "groupTitle": "register:注册"
  }
] });
