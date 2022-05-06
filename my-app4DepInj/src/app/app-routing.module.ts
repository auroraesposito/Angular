import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FireProvaComponent } from './fire-prova/fire-prova.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ModUserComponent } from './users/mod-user/mod-user.component';
import { UserComponent } from './users/user/user.component';
//import dei component della route
import { UsersComponent } from './users/users.component';
import { ModViaggioComponent } from './viaggi/mod-viaggio/mod-viaggio.component';
import { ViaggiComponent } from './viaggi/viaggi.component';
import { ViaggioComponent } from './viaggi/viaggio/viaggio.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'viaggi', component: ViaggiComponent, children : [
    {path: ':id', component:ViaggioComponent},
    {path: ':id/modifica', component: ModViaggioComponent}
  ]},
  {path: 'users', component:UsersComponent, children: [
    {path: ':nome', component:UserComponent},
    {path: ':nome/modifica', component: ModUserComponent},
  ]},
  {path: 'firebase', component: FireProvaComponent},
  {path:'not-found', component: Page404Component},
  {path: '**', redirectTo:'not-found'}, //WildCard
  
  // {path: 'viaggi/:id', component:ViaggioComponent},
  // {path: 'viaggi/:id/modifica', component: ModViaggioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
