import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EagerLoadedOneComponent } from './eager-loaded-one/eager-loaded-one.component';
import { EagerLoadedTwoComponent } from './eager-loaded-two/eager-loaded-two.component';
import { SharedService } from './shared/shared.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    EagerLoadedOneComponent,
    EagerLoadedTwoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
