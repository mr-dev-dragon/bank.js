import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // Default route - Dashboard Module
  {
    path: '',
    loadChildren: () => import('./tools/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full' // Ensures this matches exactly
  },

  // Feature Modules
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./tools/loan/loan.module').then(m => m.LoanModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./tools/transaction/transaction.module').then(m => m.TransactionModule)
  },

  // Wildcard Fallback
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
