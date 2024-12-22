import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../bank/src/app/app/account/components/account-list/account-list.component').then(m => m.AccountListComponent),
    pathMatch: 'full' // Ensures this matches exactly
  },
  {
    path: 'detail',
    loadChildren: () => import('../bank/src/app/app/account/components/account-detail/account-detail.component').then(m => m.AccountDetailComponent),
    pathMatch: 'full' // Ensures this matches exactly
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }



