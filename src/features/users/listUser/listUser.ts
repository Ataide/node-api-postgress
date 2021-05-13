import { IUserRepository } from "../../../repositories/IUserRepository";


export class ListUser {
    constructor(
        private userRepository : IUserRepository
    ) {} 

    async execute() {  
        const users =  await this.userRepository.findAll();
        return users;
    }

}