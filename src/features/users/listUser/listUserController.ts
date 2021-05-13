import { Request, Response } from "express";
import { ListUser } from "./listUser";

export class ListUserController {
    constructor(
        private listUser: ListUser
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const users = await this.listUser.execute();
            return response.status(200).json(users);

        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
              })        
        }
    }
}