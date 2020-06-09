import { Component, OnInit, Input } from '@angular/core';

export class Joke{
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string,punchline:string) {
    this.punchline = punchline;
    this.setup = setup;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}


@Component({
  selector: 'app-joke',
  template: `
    <div class="card card-block">
      <h4 class="card-title">
        <ng-content select=".setup"></ng-content>
      </h4>
      <p class="card-text" [hidden]="data.hide">
        <ng-content select=".punchline"></ng-content>
      </p>
      <a class="btn btn-primary" (click)="data.toggle()">Tell Me</a>
    </div>
  `
})
export class JokeComponent  {
  @Input("joke") data: Joke;
}

