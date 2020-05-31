import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rupes-outlet',
  templateUrl: './rupes-outlet.component.html',
  styleUrls: ['./rupes-outlet.component.css']
})
export class RupesOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public items = [{
    name: 'John',
    age: 18,
    dob: new Date(),
    salary: 20000,
    hobby: 'music',
    occupation: 'engineer',
    joiningDate: new Date(),
    debt: 1000
  },
  {
    name: 'Doe',
    age: 28,
    salary: 33000,
    hobby: 'Reading',
    joiningDate: new Date(),
    debt: 2000
  },
  {
    name: 'SomeOne',
    salary: 29000,
    hobby: 'music',
    joiningDate: new Date(),
    debt: 3000
  }];  

}
