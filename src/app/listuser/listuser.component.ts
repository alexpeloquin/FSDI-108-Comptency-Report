import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  allUsers:User[] = []; //an empty array of user

  constructor(public dataSrv:DataService) {
    //read the data
    this.allUsers=dataSrv.getAllUsers(); //put data from service on an array
    console.log(dataSrv.getAllUsers());
   }

  ngOnInit() {
  }

}
