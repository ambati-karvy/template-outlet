import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-client',
  templateUrl: './parent-client.component.html',
  styleUrls: ['./parent-client.component.css']
})
export class ParentClientComponent  {
  @Input() name: string;
}
