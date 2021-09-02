import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            // make sure the secret is same secret that we used when creating user
            decodedData = jwt.verify(token, "test");

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
        // say the user wants to... like a post...
        // click the like btn => auth middleware (next) => like controller...
    } catch (error) {
        console.log(error);
    }
};

export default auth;
