export class Person{

    email:string;
    name: string;
    birthdate: string;
    teamId: string;

    constructor(email:string, name: string, birthdate: string, teamId: string){
        this.email = email;
        this.name = name;
        this.birthdate = birthdate;
        this.teamId = teamId;
    }

}