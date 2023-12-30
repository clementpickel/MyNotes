// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:5000'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  // Example method for a POST request to login
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };
    console.log(body)
    // Set headers (if needed)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers });
  }

  registerUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
  }

  // Add more methods for other types of requests (GET, PUT, DELETE, etc.)
}
