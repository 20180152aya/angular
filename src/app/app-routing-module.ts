import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { Home } from './home/home';
import { Setting } from './setting/setting';
import { Reports } from './reports/reports';
import { ListUser } from './list-user/list-user';
const routes: Routes = [
  {path: '', component: Home},
  {path:"home", component: Home },
  {path:"setting",component:Setting},
   {path:"reports",component:Reports},
   {path:"users",component:ListUser}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
