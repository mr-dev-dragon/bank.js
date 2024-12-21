import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // Default route - Dashboard Module
  {
    path: '',
    loadChildren: () => import('./app/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full' // Ensures this matches exactly
  },

  // Feature Modules
  {
    path: 'account',
    loadChildren: () => import('./app/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./app/loan/loan.module').then(m => m.LoanModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./app/transaction/transaction.module').then(m => m.TransactionModule)
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
