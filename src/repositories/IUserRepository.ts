import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
}