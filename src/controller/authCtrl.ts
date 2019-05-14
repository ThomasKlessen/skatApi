"use strict"
import userModel from '../models/userModel'

const authCtrl = {
    register (user:any) {
        return userModel
            .register(user)

    },

    login (user:any) {
        return userModel
            .login(user)
    },

}

export default authCtrl
