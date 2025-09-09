const userDao = require("../repository/userDAO");
// const uuid = require('uuid');

async function createUser(username, password){

    const result = await userDao.createUser({user_id: crypto.randomUUID(), username, password});

    if(!result){
        return {message: "failed to create user"};
    }else{
        return {message: "created user", user: result};
    }
}

// createUser("user4", "pass4");

async function getUserById(user_id){
    const result = await userDao.getUser(user_id);

    if(!result){
        return {message: "failed to retrieve user"};
    }else{
        return {message: "retrieved user", user: result};
    }
}


async function deleteUser(user_id){
    const result = await userDao.deleteUser(user_id);

    if(!result){
        return {message: "failed to delete user"};
    }else{
        return {message: "deleted user", user_id: result};
    }

}


module.exports = {
    createUser,
    getUserById,
    deleteUser
}