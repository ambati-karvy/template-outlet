import { Component, OnInit, ViewChild, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { ButtonChildComponent } from '../button-child/button-child.component';

@Component({
  selector: 'app-button-parent',
  templateUrl: './button-parent.component.html',
  styleUrls: ['./button-parent.component.css']
})
export class ButtonParentComponent implements OnInit,AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(ButtonChildComponent,{static:false}) childButton: ButtonChildComponent
  updateTime() {
    console.log("before calling")
    this.childButton.updateTimeStamp();
  }

  @ContentChild("hello",{static:true}) contentChild:ElementRef;

  ngAfterContentInit() {
    console.log("child content")
    console.log(this.contentChild.nativeElement)
  }

}
