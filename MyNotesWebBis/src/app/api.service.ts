// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private authservice: AuthService) {}

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

  getNotes(): Observable<any> {
    const authToken = this.authservice.getAccessToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.get<any>(`${this.apiUrl}/note`, { headers });
  }

  createNote(note: any): Observable<any> {
    const authToken = this.authservice.getAccessToken();
    const url = `${this.apiUrl}/note`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.post(url, note, { headers });
  }

  deleteCurrentUser(): Observable<any> {
    const url = `${this.apiUrl}/user`;
    return this.http.delete(url);
  }
  
  updateNote(noteId: string, title: string, content: string): Observable<any> {
    const url = `${this.apiUrl}/note`;
    const authToken = this.authservice.getAccessToken();
    const noteIdAsInt = parseInt(noteId, 10);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    const requestBody = {
      note_id: noteIdAsInt,
      title: title,
      content: content,
    };

    return this.http.put<any>(url, requestBody, {headers});
  }

  deleteNote(noteId: number): Observable<any> {
    const url = `${this.apiUrl}/note`;

    const authToken = this.authservice.getAccessToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });


    const requestBody = {
      note_id: noteId,
    };

    return this.http.delete<any>(url, { body: requestBody, headers: headers});
  }
}
