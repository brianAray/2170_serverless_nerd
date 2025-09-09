const userService = require("./service/userService");

// controller layer calls the user service
// service layer calls the repository
// repository interacts with the database

userService.createUser("user5", "pass5")
    .then(data => console.log(data))
    .catch(error => console.error(error));