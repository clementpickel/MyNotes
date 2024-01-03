import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  notes: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error('User not authenticated. Redirecting to login page.');
      this.router.navigate(['/login']);
    }
    this.getNotes();
  }

  getNotes(): void {
    this.apiService.getNotes().subscribe(
      (response: any) => {
        this.notes = response.notes;
      },
      (error: any) => {
        console.error('Error fetching notes', error);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
