const { json } = require("express");
const users = require("../../../data/dummy/auth.dummy");
const authService = require("../serviecs/auth.serviecs");

class authController {
    register(req, res){
        const {username,password} = req.body;
        const result = authService.register(username,password);
        if(result.success === false){
            return res.status(result.status).json({
                message: result.message
            })
        }
        return res.status(201).json({
            message: "Created success",
            data: result
        })
    }
    login(req, res) {
        const{username, password} = req.body;
        const result = authService.login(username, password);
        return res.status(200).json({
            message: result.message
        })
    } 
}

module.exports = new authController();
