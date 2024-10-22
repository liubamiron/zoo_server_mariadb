import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError.js';

export default function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            return next();  // Make sure to return here to avoid unintended behavior
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Extract token after 'Bearer'
            if (!token) {
                return res.status(401).json({ message: "Not authorised" });
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Not allowed" });
            }

            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).json({ message: "Not authorised lm" });
        }
    };
}
