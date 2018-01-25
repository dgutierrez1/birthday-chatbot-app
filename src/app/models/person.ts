export class Person {

  email: string;
  name: string;
  birthdate: string;
  team:{
    id: string,
    name: string
  };


  constructor(email: string, name: string, birthdate: string, teamId: string, teamName: string) {
    this.email = email;
    this.name = name;
    this.birthdate = birthdate;
    this.team.id = teamId;
    this.team.name = teamName;
  }

}
