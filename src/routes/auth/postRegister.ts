import AuthController from '../../controller/authCtrl'

const postRegister = (req:any, res:any) => {
    return AuthController
        .register(req.body.user)
        .then(res.sendJson)
        .catch(res.sendError)
}

export default postRegister