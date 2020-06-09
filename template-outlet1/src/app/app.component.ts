import { Component } from '@angular/core';
import { Joke } from './joke/joke.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Two clients sharing a select component but using different templates.

  // function appendLatin(shark): any{
  //   const latin = this.latinNames[shark];  
  //   return `${shark} (${latin})` ;
  // }

  joke: Joke = new Joke(
    "A kid threw a lump of cheddar at me",
    "I thought ‘That’s not very mature’"
  );
  
}
