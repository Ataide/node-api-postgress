import { response, Router } from 'express'
import { createUserController } from './features/users/createUser'
import { listUserController } from './features/users/listUser'
 
const router = Router()


router.get('/users', (request, response) => {
    return listUserController.handle(request, response);
})

router.post('/users', (request, response) => {
    return createUserController.handle(request,response);
})

router.put('/users', (request, response) => {

})


export { router }