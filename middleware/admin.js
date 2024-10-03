const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASS = require("../config");

function adminMiddleware(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, )

    if(decodedData){
        req.userID = decodedData.id;
        next()
    } else {
        res.status(404).json({
            message: "you are not signed yet"
        })
    }
};

module.exports = {
    adminMiddleware: adminMiddleware
};