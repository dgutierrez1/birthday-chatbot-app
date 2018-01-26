export class Person {

  email: string;
  name: string;
  birthdate: string;
  team: {
    _id: string,
    name: string,
  };


  constructor(email: string, name: string, birthdate: string, teamId: string, teamName: string) {
    this.email = email;
    this.name = name;
    this.birthdate = birthdate;
    this.team = {
      _id:teamId,
      name: teamName
    }
    
  }

}

