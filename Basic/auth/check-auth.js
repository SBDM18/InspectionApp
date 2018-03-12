//this file is used to authenticate routes before they are handled. Routes like get, update, delete and others will be protected by using this exported module.  
//checks for valid token and is verified that it has not been tampered before continuing
const jwt = require('jsonwebtoken');

//no token present should fail

module.exports = (req, res, next) =>{
        try{
            const token = req.headers.authorization.split(" ")[1];                    
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
            next();
        }catch(error){
            return res.status(401).json({
                message: "Auth failed no jwt"
            });
        };    
};