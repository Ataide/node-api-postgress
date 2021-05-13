import { Request, response, Response } from "express";
import { PeopleList } from "./PeopleList";

export class PeopleListController {

    constructor(
        private peopleList: PeopleList
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const peoples = await this.peopleList.execute();
            return response.status( peoples ? 200 : 204 ).json(peoples);
            
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
              })  
        }
    } 
}