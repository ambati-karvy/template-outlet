import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { MySelectorComponent } from "./my-selector/my-selector.component";
import { Client1Component } from "./client-1/client-1.component";
import { Client2Component } from "./client-2/client-2.component";
import { ParentClientComponent } from './parent-client/parent-client.component';
import { ParentServerComponent } from './parent-server/parent-server.component';
import { ButtonParentComponent } from './button-parent/button-parent.component';
import { ButtonChildComponent } from './button-child/button-child.component';
import { JokeComponent, Joke } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    MySelectorComponent,
    Client1Component,
    Client2Component,
    ParentClientComponent,
    ParentServerComponent,
    ButtonParentComponent,
    ButtonChildComponent,
    JokeComponent,
    JokeListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
