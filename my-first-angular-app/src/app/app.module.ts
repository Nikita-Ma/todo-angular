import {BrowserModule, platformBrowser} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import { AddToTestComponent } from './add-to-test/add-to-test.component';
import {TestModule} from "./test/test.module";
import {ModalModule} from "./modal/modal.module";

@NgModule({
  declarations: [AppComponent, AddToTestComponent],
  imports: [BrowserModule, AppRoutingModule, TestModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}

// The `AppModule` is used for bootstrapping, but the `@NgModule.bootstrap` field is missing.
platformBrowser().bootstrapModule(AppModule);
