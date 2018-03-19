//this file is used to authenticate routes before they are handled. Routes like get, update, delete and others will be protected by using this exported module.  
//checks for valid token and is verified that it has not been tampered before continuing
const jwt = require('jsonwebtoken');

//no token present should fail

module.exports = (req, res, next) =>{
    console.log("checking auth");
    
        try{
            // const token = req.headers.authorization.split(" ")[1];    
            const token = req.headers.authorization;
                               
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;            
            console.log(decoded);
            next();
        }catch(error){
            return res.status(401).json({
                message: "Auth failed no jwt"
            });
        }  
};

//add checkAuth to any request that needs to be verified before it can process.. creates route protection with jwt token

//decide if we want to have a folde for routes and another for controllers allowing us to import the controllers into the routes