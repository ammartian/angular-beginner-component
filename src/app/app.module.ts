import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontSizeUpDirective } from './font-size-up.directive';
import { MagnifierDirective } from './magnifier.directive';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FontSizeUpDirective,
    MagnifierDirective,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
