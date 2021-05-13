import { Router } from 'express'
import { getUsers } from './repositories/user-repository'
import { createUserController } from './features/createUser'
 
const router = Router()


router.get('/', (request, response) => {
    return response.json({
        info: "API funcionando"
    })
})

router.post('/users', (request, response) => {
    return createUserController.handle(request,response);
})

router.get('/users', getUsers);

export { router }