import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the value of the title var';
  counter = 0;

  // method that its auto exec
  // once the component its created
  constructor() {
    console.log('Im the constructor for AppComponent');
    this.sayHello();
  }

  increaseCounter() {
    this.counter += 1;
  }

  sayHello() {
    var name = 'Sergio';
    console.log(name);

    var luckyNumber = 42;
    var myName: string = 'Sergio Inzunza';
    var isValid: boolean = false; // true
    var anything: any = 'what ever';
  }
}
