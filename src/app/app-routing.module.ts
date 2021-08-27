import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { UsersComponent } from './users/users.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeHomeComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
