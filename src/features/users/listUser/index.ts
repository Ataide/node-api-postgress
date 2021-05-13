import { PostgresUserRepository } from "../../../repositories/implementations/PosgresUserRepository";
import { ListUser } from "./listUser";
import { ListUserController } from "./listUserController";

const postgresUsersRepository = new PostgresUserRepository();

const listUser = new ListUser(postgresUsersRepository);
const listUserController = new ListUserController(listUser);

export { listUser, listUserController }

