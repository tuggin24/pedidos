import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-login-buttons',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './no-login-buttons.component.html',
  styleUrls: ['../actions-buttons.component.scss', './no-login-buttons.component.scss']
})
export class NoLoginButtonsComponent {

}
