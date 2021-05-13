import { response, Router } from 'express'
import { peopleListController } from '../peoples/list'
 
const router = Router()


router.get('/peoples', (request, response) => {        
    return peopleListController.handle(request, response);
})

export { router }