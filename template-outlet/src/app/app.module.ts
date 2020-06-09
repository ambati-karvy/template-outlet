import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RupesOutletComponent } from './rupes-outlet/rupes-outlet.component';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { MySelectorComponent } from './my-selector/my-selector.component';
import { ClientOutletComponent } from './client-outlet/client-outlet.component';
import { RepuesContainerComponent } from './repues-container/repues-container.component';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    RupesOutletComponent,
    Client1Component,
    Client2Component,
    MySelectorComponent,
    ClientOutletComponent,
    RepuesContainerComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot([{path:"rupes",component:RupesOutletComponent},
    {path:"client",component:ClientOutletComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
