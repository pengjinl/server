define({ "api": [
  {
    "type": "get",
    "url": "/address/addressinfo",
    "title": "地址",
    "group": "cart:地址",
    "name": "地址",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/address/addressinfo"
      }
    ],
    "filename": "routers/Address/index.js",
    "groupTitle": "cart:地址"
  },
  {
    "type": "get",
    "url": "/cart/checkcart",
    "title": "切换商品的选中状态",
    "group": "cart:购物车",
    "name": "切换购物车商品的选中状态",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skuid",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ischecked",
            "description": "<p>选中状态 1代表选中 0代表不选</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/cart/deletecart"
      }
    ],
    "filename": "routers/cart/index.js",
    "groupTitle": "cart:购物车"
  },
  {
    "type": "delete",
    "url": "/cart/deletecart",
    "title": "删除购物车",
    "group": "cart:购物车",
    "name": "删除购物车",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skuid",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/cart/deletecart"
      }
    ],
    "filename": "routers/cart/index.js",
    "groupTitle": "cart:购物车"
  },
  {
    "type": "post",
    "url": "/cart/addtocart",
    "title": "添加到购物车（对已有商品进行数量改动）",
    "group": "cart:购物车",
    "name": "添加到购物车",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skuid",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skunum",
            "description": "<p>商品数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:4000/cart/addtocart"
      }
    ],
    "filename": "routers/cart/index.js",
    "groupTitle": "cart:购物车"
  },
  {
    "type": "get",
    "url": "/cart/cartlist",
    "title": "获取购物车列表",
    "group": "cart:购物车",
    "name": "获取购物车列表信息数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/cart/cartlist"
      }
    ],
    "filename": "routers/cart/index.js",
    "groupTitle": "cart:购物车"
  },
  {
    "type": "get",
    "url": "/detail/goodsdetail",
    "title": "获取商品详情",
    "group": "detail:商品详情",
    "name": "获取商品详情数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/detail/goodsdetail"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skuid",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "filename": "routers/Details/index.js",
    "groupTitle": "detail:商品详情"
  },
  {
    "type": "get",
    "url": "/home/banners",
    "title": "小图数据",
    "group": "home:首页数据",
    "name": "获取小轮播图数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/home/smallbanners"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/Home/index.js",
    "groupTitle": "home:首页数据"
  },
  {
    "type": "get",
    "url": "/home/banners",
    "title": "大图数据",
    "group": "home:首页数据",
    "name": "获取轮播图数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/home/banners"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/Home/index.js",
    "groupTitle": "home:首页数据"
  },
  {
    "type": "get",
    "url": "/home/homenews",
    "title": "首页新闻数据",
    "group": "home:首页数据",
    "name": "获取首页新闻数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000//home/homenews"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/Home/index.js",
    "groupTitle": "home:首页数据"
  },
  {
    "type": "post",
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
    "type": "post",
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
    "type": "post",
    "url": "/login/account",
    "title": "账户登录",
    "group": "login:登录",
    "name": "邮箱账户与密码登录",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/login/account"
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
            "type": "password",
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
    "url": "/news/getnewslist",
    "title": "获取新闻列表",
    "group": "news:新闻",
    "name": "获取新闻列表数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/news/getnewslist"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 20000,\n  \"data\": \"\",\n   \"msg\":'发送成功'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/News/index.js",
    "groupTitle": "news:新闻"
  },
  {
    "type": "post",
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
            "field": "usermail",
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
  },
  {
    "type": "get",
    "url": "/shophome/goodslist",
    "title": "获取商品列表",
    "group": "shophome:店铺首页",
    "name": "获取商品列表数据",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/shophome/goodslist"
      }
    ],
    "filename": "routers/Shophome/index.js",
    "groupTitle": "shophome:店铺首页"
  }
] });
