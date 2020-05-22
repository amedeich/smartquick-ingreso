import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthenticatedGuard]
  },
  { path: 'home', loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule), canActivate: [LoginGuard] },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
