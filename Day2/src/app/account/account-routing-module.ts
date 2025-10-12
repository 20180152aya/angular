import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Accounts} from './accounts/accounts';
import {Profile} from './profile/profile';
import {Setting} from './setting/setting';

const routes: Routes = [
 {
    path: '',
    component: Accounts,
    children: [
      { path: 'profile', component: Profile },
      { path: 'settings', component: Setting },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
