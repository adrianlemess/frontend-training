import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedAreaComponent } from './authenticated-area/authenticated-area.component';
import { AdminComponent } from './admin/admin.component';
import { View403Component } from './view403/view403.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent},
  { path: 'authenticated-area', component: AuthenticatedAreaComponent },
  { path: 'admin', component: AdminComponent },
  { path: '403', component: View403Component },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
