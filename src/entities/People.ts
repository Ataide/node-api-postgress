import { Entity, Column, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('peoples')
export class People {

    @PrimaryColumn()    
    public readonly id: string;
    @Column()
    public name: string;
    @Column()
    public address: string;
    @Column()
    public phone: string; 
    @Column()
    public email:string;
    
    constructor(props: Omit<People, 'id'> , id? : string) {
        Object.assign(this, props);
        if(!id) {
            this.id = uuid()
        }
    }

}
