# Description
A JWT library that is easy to use.

# Feature
1. Automatically determine when it expires.
2. Easy to use.
3. Don't need to do a lot of configuration.
4. Distinguish between data and JWT's configuration (such as iss, sub, aud, exp, nbf, iat, jti).

# Defect
1. This library is using AES encrypt instead of HS256 and RS256 because author don't know how to use HS256 and RS256.

# Usage

Install easy-jwt

> npm install easy-jwt

or use yarn

> yarn add easy-jwt

```javascript
import Jwt from 'easy-jwt';

let key = 'Xjsiefd'; // Your secret key
let salt = 'Jbxidfw'; // Your salt (will use it in the JWT's part three(signature))

let jwt = new Jwt(key, salt, false); // Jwt(key, salt, isNeedUrlEncode);

let jwtString = jwt.encrypt({'user': 'test'}, {'iss': 'admin'})); // encrypt JWT

console.log(jwtString);
// If this statement return false that is a wrong key or time out.
console.log(jwt.decrypt(jwtString));
```

# API
### Functions

##### encrypt

# Release notes

### 0.3.0
Supporting encrypt.
Will update decrypt.

### 0.2.0
Updating some code and writing some content of README.

### 0.1.0
The beginning of the project.