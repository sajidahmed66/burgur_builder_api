const jwt = require('jsonwebtoken');


module.exports.authorized = (req, res, next) => {
    try {
        const token = req.headers('Authoraization').split(' ')[1].trim();
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode;
        next();
    } catch (err) {
        res.status(401).send("Not Authorize user")

    }
}
