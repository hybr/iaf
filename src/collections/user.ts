
import {Person} from './person';

export class User {
  email: string;
  password: string;
  person: Person;
	
  constructor(
    email: string,
    password: string,
    person: Person
  ) {
    this.email = email;
    this.password = password;
    this.person = person;
  }
}