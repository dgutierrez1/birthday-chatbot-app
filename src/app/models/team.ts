import { Person } from "./person";

export class Team{

    name: string;
    members?: Array<Person>;
    _id?: string;

    constructor(name: string, members?, _id?){
        this.name = name;
        this.members = members;
        this._id = _id;
    }

}