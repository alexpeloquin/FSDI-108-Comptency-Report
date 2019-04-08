import { DataService } from './../data.service';
import { User } from './../user';

import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-regiteruser',
  templateUrl: './regiteruser.component.html',
  styleUrls: ['./regiteruser.component.css']
})
export class RegiteruserComponent implements OnInit {
  userModel: User = new User();
  pass2: String;
  passMatchError = false;

  constructor(public dataSrv: DataService) {
    console.log('constructor of register user');
  }

  ngOnInit() {
    console.log('register user initialized');
  }

  save() {
    this.dataSrv.addUser(this.userModel);
    // clear the input form
    this.userModel = new User(); // clears all the model variables
    this.pass2 = ''; // clear pass 2 also
  }
}
