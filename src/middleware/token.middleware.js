import jwt from "jsonwebtoken";

function validateToken(req, res, next) {
  const headers = req.headers.authorization;

  if (headers) {
    // eslint-disable-next-line prefer-destructuring
    const token = headers.split(" ")[1];

    if (token) {
      try {
        const decoded = jwt.verify(token, "super-pants-secret-key");
        req.userId = decoded.userId;
      } catch (err) {
        return res.status(401).json({ success: false, error: err.message });
      }
    }
  }

  return next();
}

export default validateToken;
