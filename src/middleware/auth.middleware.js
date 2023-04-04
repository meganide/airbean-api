import jwt from 'jsonwebtoken';
import { findUserById } from '../models/user/user.model.js';

const checkValidToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ success: false, error: 'Unauthorized access' });

    const decodedData = jwt.verify(token, 'super-pants-secret-key');

    const user = await findUserById(decodedData.userId);
    if (!user) return res.status(401).json({ success: false, error: 'Unauthorized access' });

    let dateNow = new Date();
    if (decodedData.exp < dateNow.getTime()/1000) return res.status(401).json({ success: false, error: 'Unauthorized access' });

    res.locals.userId = decodedData.userId;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Internal server error' });
  }
};

export default checkValidToken;