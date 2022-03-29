const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Token n'est pas valide");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("Vous n'etes pas authentifier")
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else (
            res.status(403).json("Vous n'avez pas les droits !")
        );
    })
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else (
            res.status(403).json("Vous n'avez pas les droits !")
        );
    })
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};