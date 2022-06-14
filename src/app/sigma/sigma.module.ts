import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './components/table/table.component';
import { SigmaRoutingModule } from './sigma-routing.module';
import { SigmaComponent } from './sigma.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    CompanyComponent,
    ProductComponent,
    UserComponent,
    TableComponent,
    SigmaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SigmaRoutingModule
  ]
})
export class SigmaModule { }
