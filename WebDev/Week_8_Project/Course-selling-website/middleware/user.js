const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
user_secret = process.env.JWT_USER_SECRET;

function userMiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        res.json({
            error:"Please provide token in request Headers!"
        });
        return;
    }
    const decoded = jwt.verify(token, user_secret);
    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({
            error:"You are not Signed In"
        });
        return;
    }    



}

module.exports = {
    userMiddleware
}