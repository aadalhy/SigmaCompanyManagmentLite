import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'sigma', loadChildren: () => import('./sigma/sigma.module').then(m => m.SigmaModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
