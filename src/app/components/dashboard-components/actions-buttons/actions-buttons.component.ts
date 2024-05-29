import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { NoLoginButtonsComponent } from './no-login-buttons/no-login-buttons.component';

@Component({
  selector: 'app-actions-buttons',
  standalone: true,
  imports: [CommonModule, LoginButtonsComponent, NoLoginButtonsComponent],
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss']
})
export class ActionsButtonsComponent {

}
