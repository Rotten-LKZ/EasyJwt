# 其它语言的README文件
[英语 English](https://github.com/Rotten-LKZ/EasyJwt#the-readme-of-other-language)

# 描述
一个简单易用的JWT库

# 特性
1. 可以设置自动过期时间
2. 简单实用
3. 不需要进行过多的配置
4. 区分数据和JWT配置 (比如 iss, sub, aud, exp, nbf, iat, jti).

# 缺点
1. 仅支持JWT加密，因为我不会HS256和RS256加密.

# 注意事项
1. JWT配置里面跟时间有关的部分 (比如 exp, nbf, iat), 请使用十位时间戳

# 用法

安装 easy-jwt

> npm install easy-jwt

或者用 yarn

> yarn add easy-jwt

```javascript

let key = 'Xjsiefd'; // 你的密钥
let salt = 'Jbxidfw'; // 你的盐 (将会在加密JWT的第三部分使用(signature))

// 导入JWT来自 'easy-jwt';
var ins = require('easy-jwt');
let jwt = new ins.easyJwt(key, salt, false); // Jwt(key, salt, isNeedUrlEncode) (密钥, 盐, 是否需要进行URL编码);

console.log(jwt.encrypt({ "test": "Test" }, { 'iss': 'admin' })) // 

// 如果这句返回false 则配置等出错或者超时
console.log(jwt.decrypt(jwtString));
```

# API
### 方法

##### encrypt

# 更新日志

### 0.4.0
开放API

### 0.3.0
支持加密

将支持解密

### 0.2.0
提交一些代码以及写了点README

### 0.1.0
这个项目的开始