import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { FilmsComponent } from  './films/films.component';
import { FilmViewComponent } from  './films/film-view/film-view.component';
import { CreateComponent } from  './films/create/create.component';




const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterComponent},
  { path: 'films/create', component : CreateComponent},
  { path: 'films/:flim_slug_name', component : FilmViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
