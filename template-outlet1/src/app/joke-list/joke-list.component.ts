import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { Joke, JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  template: `
    <h4 #header>View Jokes</h4>
    <app-joke *ngFor="let j of jokes" [joke]="j">
      <span class="setup">{{ j.setup }}?</span>
      <h1 class="punchline">{{ j.punchline }}</h1>
    </app-joke>
    <h4>Content Jokes</h4>
    <ng-content></ng-content>
  `
})
export class JokeListComponent implements AfterViewInit  {

  jokes: Joke[] = [
    new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello-me (Halloumi)"
    ),
    new Joke(
      "What kind of cheese do you use to disguise a small horse",
      "Mask-a-pony (Mascarpone)"
    )
  ];


  @ViewChild(JokeComponent,{static:false}) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ContentChild(JokeComponent,{static:false}) jokeContentChils: JokeComponent;

  ngAfterViewInit() {
    console.log("jok content following")
    console.log(this.jokeViewChild);
    this.jokeViewChildren.forEach(data => console.log(data.data.setup));
    console.log(`after content child ${this.jokeContentChils.data.hide}`)
  }
}
