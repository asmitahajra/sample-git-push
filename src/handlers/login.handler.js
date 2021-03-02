const AuthenticationError = require("../errors/auth.error");
const { validateUserLogin } = require("../services/login.service");

const loginHandler=  (req, res)=> {
    const {username, password}= req.body;
    try {
        console.log("hi");
        //console.log(username);
    const accessToken= validateUserLogin(username, password);
    console.log("hey");
    res.status(200).json(accessToken);
    }
    catch(error){
        if(error instanceof AuthenticationError) {
            res.status(401).json({error: error.message})
        }
    }
};

module.exports = {loginHandler};