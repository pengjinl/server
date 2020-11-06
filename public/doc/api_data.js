define({ "api": [
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
            "field": "mail",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/login.js",
    "groupTitle": "login:登录"
  }
] });
