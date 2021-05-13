import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./createUserDTO";

export class CreateUser {
    constructor(
        private userRepository : IUserRepository
    ) {}

    async execute(data : ICreateUserDTO) {      
        
        const userAlreadyExist =  await this.userRepository.findByEmail(data.email); 

        if (userAlreadyExist) {
            throw new Error('User already exists.');
        }

        const user = new User(data);        

        this.userRepository.save(user);

    }


}