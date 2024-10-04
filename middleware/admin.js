const jwt = require("jsonwebtoken");
import JWT_ADMIN_PASS from "../config";

function adminMiddleware(req, res, next){
    const token = req.headers.token;
    const decodedData = verify(token, JWT_ADMIN_PASS)

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
}