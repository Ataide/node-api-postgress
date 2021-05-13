import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { getRepository } from "typeorm";

export class PostgresUserRepository implements IUserRepository {
    
    async findByEmail(email: string): Promise<User> { 
        const repository = getRepository(User);        
        const user = await repository.findOne({where: {"email": email} });
        return user;
    }

    async save(user: User): Promise<void> {
        const repository = getRepository(User);
        await repository.save(user);       
    }

    async update(user: User): Promise<void> {
        const repository = getRepository(User);
        await repository.update(user.id, user);
    }
    
}