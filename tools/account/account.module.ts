import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from '../bank/src/app/app/account/components/account-list/account-list.component';
import { AccountDetailComponent } from '../bank/src/app/app/account/components/account-detail/account-detail.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AccountListComponent,
    AccountDetailComponent
  ]
})
export class AccountModule { }



