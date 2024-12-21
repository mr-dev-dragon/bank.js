import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionListComponent } from './app/transaction/components/transaction-list/transaction-list.component';
import { NavbarComponent } from './app/shared/components/navbar/navbar.component';
import { FooterComponent } from './app/shared/components/footer/footer.component';
import { MainComponent } from './app/shared/components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TransactionListComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bank';
}
