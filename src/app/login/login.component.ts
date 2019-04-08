import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables to contain the info from the input fields
  email:"";
  password:"";
  vaildCredential = true;

  constructor(public dataSrv:DataService, public shared:SharedService) {}

  ngOnInit() {
  }

  login(){
    console.log("login button clicked", this.email, this.password);

    this.vaildCredential=false;
    var userList = this.dataSrv.getAllUsers();
    //create a for to visit each user on the list
    for (var i=0; i<userList.length; i++){
      // get the user on to variable (savedUser)
      var savedUser = userList[i];
      // compare savedUser.email with this.email and saveUser.pass with this.passsword
      if(savedUser.email ==this.email && savedUser.password ==this.password){
        //valid user info
        console.log("User is logged in!");
        this.vaildCredential=true;
        this.shared.isUserLogged=true;
        this.shared.loggedUser = savedUser; //save the user that logged in
      }
    }
  }
}
