import { testSelector } from './../../store/form.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService) { }

  logout() {
    this.auth.logout()
    this.router.navigate(['/'])
  }

}
