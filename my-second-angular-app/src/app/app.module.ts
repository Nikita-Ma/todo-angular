import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColoryDirective } from './colory.directive';
import { ChildComponent } from './child/child.component';
import { DelayDirective } from './delay.directive';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoryDirective,
    ChildComponent,
    DelayDirective,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
