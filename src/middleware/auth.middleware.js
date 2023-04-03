import jwt from 'jsonwebtoken';
import User from '../models/user/user.schema.js';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    const decodedData = jwt.verify(token, 'super-pants-secret-key');
    const user = await User.findById(decodedData.id);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default auth;