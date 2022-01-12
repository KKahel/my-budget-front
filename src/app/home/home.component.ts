import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authentificationService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    if (this.authentificationService.currentUserValue) {
      this.router.navigate(['']);
    }

  }

}
