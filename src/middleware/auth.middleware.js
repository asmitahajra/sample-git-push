const jwt= require('jsonwebtoken');
const JWT_SECRET="thisissecret";

const authenticateJwt= (req, res, next)=> {
    const authHeader= req.headers.autorization;
    const token= authHeader.split(' ')[1]; //bearer token
    if(token) {
    jwt.verify(token, JWT_SECRET, (err, user)=> {
        if(err) {
            return res.status(401).json({message: 'Unauthenticated'});
        }
        req.user=user;
        next();
    });
    }
    else{
        res.status(400).send();
    }
} 

module.exports={authenticateJwt};