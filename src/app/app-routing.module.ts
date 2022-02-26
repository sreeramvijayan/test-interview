import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LoginComponent } from './login/login.component';
import { UpdatePageComponent } from './update-page/update-page.component';

const routes: Routes = [
  {path: '' , component : LoginComponent},
  {path: 'listing' , component : ListingPageComponent},
  {path: 'create-form' , component : AddingFormComponent},
  
  {path: 'update' , component : UpdatePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
