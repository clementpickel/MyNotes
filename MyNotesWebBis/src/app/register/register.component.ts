// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    username: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  register(): void {
    this.apiService.register(this.user.email, this.user.password, this.user.username).subscribe(
      (response: any) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error during registration', error);
        // Handle registration error, e.g., display an error message
      }
    );
  }
}
