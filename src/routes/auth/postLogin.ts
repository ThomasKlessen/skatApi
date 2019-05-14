import AuthController from'../../controller/authCtrl'

const postLogin = (req:any, res:any) => {
     console.log(req.body)
     AuthController
        .login(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
}

export default postLogin