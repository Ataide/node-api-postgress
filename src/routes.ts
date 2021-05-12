import { Router } from 'express'
import { getUsers } from './repository/user-repository'
 
const router = Router()


router.get('/', (request, response) => {
    return response.json({
        info: "API funcionando"
    })
})

router.get('/users', getUsers);

export { router }