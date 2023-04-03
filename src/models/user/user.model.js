import User from "./user.schema.js";

export const checkIfUserExists = async (username) => {
    const user = await User.findOne({ username });
    if(user) {
        return true;
    } else {
        return false;
    }
};

export const createUser = async (username, password) => {
    const user = await User.create({ username, password });
    return user;
}