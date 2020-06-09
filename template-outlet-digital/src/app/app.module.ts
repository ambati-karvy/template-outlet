import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { UsageComponent } from './usage/usage.component';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    UsageComponent,
    CardItemDirective,
    ListItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
