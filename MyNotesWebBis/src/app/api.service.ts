// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Example method for a POST request to login
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers });
  }

  register(email: string, password: string, username: string): Observable<any> {
    const url = `${this.apiUrl}/register`;
    const body = { email, password, username};
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, {headers});
  }

  // Add more methods for other types of requests (GET, PUT, DELETE, etc.)
}
