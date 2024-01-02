import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    username: '',
  };

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {}

  register(): void {
    this.apiService.register(this.user.email, this.user.password, this.user.username).subscribe(
      (response: any) => {
        const accessToken = response.access_token;
        this.authService.saveAccessToken(accessToken);
        this.router.navigate(['/main']);
      },
      (error: any) => {
        console.error('Error during registration', error);
      }
    );
  }
}
