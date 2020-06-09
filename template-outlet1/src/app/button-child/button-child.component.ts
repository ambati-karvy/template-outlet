import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrls: ['./button-child.component.css']
})
export class ButtonChildComponent implements OnInit {

  constructor() { }

  public timeStamp: Date;
  ngOnInit() {

    this.updateTimeStamp();
  }

  updateTimeStamp() {
    this.timeStamp = new Date();
  }

}
