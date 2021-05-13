import { PostgresUserRepository } from "../../../repositories/implementations/PosgresUserRepository";
import { CreateUser } from "./createUser";
import { CreateUserController } from "./createUserController";

const postgresUsersRepository = new PostgresUserRepository();

const createUser = new CreateUser(postgresUsersRepository);
const createUserController = new CreateUserController(createUser);

export { createUser, createUserController }

