const AuthenticationError = require('../errors/auth.error');
const users= require('../resources/users');
const jwt= require('jsonwebtoken');
const JWT_SECRET="thisissecret";

const validateUserLogin= (username, password)=> {
    const verifiedUser= users.find((user)=> user.username===username && user.password=== password);
    console.log(verifiedUser);

    if(verifiedUser) {
        const accessToken=jwt.sign({username: verifiedUser.username, role: verifiedUser.role}, JWT_SECRET);
        console.log(accessToken);
        return {accessToken};
        //accessToken: accessToken
    }
    throw new AuthenticationError('Username and password invalid');
};

module.exports= {validateUserLogin}; 