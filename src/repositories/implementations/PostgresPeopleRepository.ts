import { People } from "../../entities/People";
import { IPeopleRepository } from "../IPeopleRepository";
import { getRepository } from 'typeorm';

export class PostgresPeopleRepository implements IPeopleRepository {
    
    async findAll(): Promise<People[]> {
        const repository = getRepository(People);
        const peoples =  await repository.find();
        return peoples;        
    }

} 