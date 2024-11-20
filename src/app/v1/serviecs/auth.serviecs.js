const authModel = require("../models/auth.model");

class authService {
     register(username, password) {
        // 1. Check invalid
        if(!username || !password){
            return {
                success: false,
                message: "Username and password are required",
                status: 400,
            }
        }

        //2. check exit
        const user = authModel.getUser(username);
        if(user) {
            return {
                success: false,
                message: "Username alrealy exists",
                status: 400
            }
        }

        authModel.createUser(username,password);

        console.log("Access user create account");
        return {username, password};
    }

    login(username, password) {
        // 1. Check invalid
        if(!username || !password){
            return {
                success: false,
                message: "Username and password are required",
                status: 400,
            }
        }
        //2. check exit
        const user = authModel.getUser(username);
        if(!user) {
            return {
                success: false,
                message: "Username not exists",
                status: 400
            }
        }

        //3. check password
        if(user.password !== password) {
            return {
                success: false,
                message: "Password is incorrect",
                status: 400
            }
        }

        return {
            message: "Login success",
        }
    }
}

module.exports = new authService();