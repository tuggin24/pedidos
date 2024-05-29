import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login-buttons',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './login-buttons.component.html',
  styleUrls: ['../actions-buttons.component.scss']
})
export class LoginButtonsComponent {

}
