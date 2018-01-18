export class Person{

    email:string;
    name: string;
    birthdate: string;
    team: {
        teamId: string;
        name: string;
    }
    constructor(email:string, name: string, birthdate: string, team: any){
        this.email = email;
        this.name = name;
        this.birthdate = birthdate;
        this.team = team;
    }

}