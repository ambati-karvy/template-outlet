import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RupesOutletComponent } from './rupes-outlet/rupes-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    RupesOutletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"rupes",component:RupesOutletComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
