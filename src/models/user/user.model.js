import User from "./user.schema.js";

export const findUserByUsername = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

export const findUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

export const createUser = async (username, password) => {
  const user = await User.create({ username, password });
  return user;
};
