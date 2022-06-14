import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { SigmaComponent } from './sigma.component';
import { AccessGuard } from '../auth/guards/access.guard';

const routes: Routes = [
  {
    path: '', component: SigmaComponent, canActivate: [AccessGuard],children: [
      { path: 'home', component: HomeComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'product', component: ProductComponent },
      { path: 'user', component: UserComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class SigmaRoutingModule { }