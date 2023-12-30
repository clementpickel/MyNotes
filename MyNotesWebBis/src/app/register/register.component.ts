// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

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
    this.apiService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during registration', error);
        // Handle registration error, e.g., display an error message
      }
    );
  }
}
