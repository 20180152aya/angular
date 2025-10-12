import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing-module';
import { Accounts } from './accounts/accounts';
import { Profile } from './profile/profile';
import { Setting } from './setting/setting';


@NgModule({
  declarations: [
    Accounts,
    Profile,
    Setting
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
