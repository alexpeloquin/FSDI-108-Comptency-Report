import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [];

  constructor() {
    if(this.users.length == 0){
      var admin = new User();
      admin.email = "admin@mail.com";
      admin.password = "qwerty";
      admin.userName = "Admin";
      admin.firstName = "Admin";
      admin.lastName = "User"
      this.users.push(admin);
    }
  }

  public addUser(theUser: User) {
    this.users.push(theUser); // saves the user on the array
  }

  public getAllUsers() {
    return this.users; // send the array back
  }
}
