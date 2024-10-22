import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const token = req.headers.authorization?.split(' ')[1]; // Optional chaining in case authorization is undefined

        if (!token) {
            return res.status(401).json({ message: "Not authorized" });
        }

        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (e) {
        return res.status(401).json({ message: "Not authorized" });
    }
};
