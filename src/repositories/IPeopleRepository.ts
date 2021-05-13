import { People } from '../entities/People';

export interface IPeopleRepository {
    findAll(): Promise<People[]>;

}