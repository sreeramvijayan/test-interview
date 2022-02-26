import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePageComponent } from './update-page/update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddingFormComponent,
    ListingPageComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
