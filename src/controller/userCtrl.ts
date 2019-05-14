import userModel from '../models/userModel'
import dbError from '../errors/dbErrors'
import userError from '../errors/userErrors'

const userController = {
    getAll () {
        return userModel
            .getAll()
            .catch((err:Error) => {
                if (err instanceof dbError) {
                    return Promise.reject(err)
                } else {
                    return Promise.reject(new userError('Fehler in der Logik'))
                }
            })
    }
}

export default userController