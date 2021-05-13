import { IPeopleRepository } from "../../../repositories/IPeopleRepository";

export class PeopleList {
    constructor(
        private repository: IPeopleRepository 
    ){ }

    async execute() {
        const peoples = await this.repository.findAll()
        return peoples;
    }
}