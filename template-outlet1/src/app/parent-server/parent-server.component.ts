import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ParentClientComponent } from '../parent-client/parent-client.component';

@Component({
  selector: 'app-parent-server',
  templateUrl: './parent-server.component.html',
  styleUrls: ['./parent-server.component.css']
})
export class ParentServerComponent implements AfterViewInit {

  name = "angular";
  @ViewChild(ParentClientComponent,{static:true}) hello: ParentClientComponent;

  @ViewChild("pRef",{static:false}) pref: ElementRef;

  @ViewChildren(ParentClientComponent) helloQuery: QueryList<any>;
  
  ngAfterViewInit() {
    console.log("hello",this.hello.name)
    console.log("before changing",this.pref.nativeElement.innerHTML)
    this.pref.nativeElement.innerHTML = "Dom elemnt are changed";

   this.helloQuery.forEach(hello1 => console.log("list",hello1))
  }

}
