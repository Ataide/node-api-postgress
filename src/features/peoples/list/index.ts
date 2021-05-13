import { PostgresPeopleRepository } from "../../../repositories/implementations/PostgresPeopleRepository";
import { PeopleList } from "./PeopleList";
import { PeopleListController } from "./PeopleListController";

const postgresPeopleRepository = new PostgresPeopleRepository();
const peopleList = new PeopleList(postgresPeopleRepository);
const peopleListController = new PeopleListController(peopleList);

export { peopleList, peopleListController }
