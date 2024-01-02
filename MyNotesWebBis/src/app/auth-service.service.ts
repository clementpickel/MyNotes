import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';

  constructor() {}

  // Save the access token to local storage
  saveAccessToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
  }

  // Retrieve the access token from local storage
  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  // Remove the access token from local storage (logout)
  removeAccessToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}
