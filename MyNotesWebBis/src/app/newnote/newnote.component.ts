// newnote.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.scss']
})
export class NewnoteComponent {
  note = {
    title: '',
    content: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error('User not authenticated. Redirecting to login page.');
      this.router.navigate(['/login']);
    }
  }

  createNote(): void {
    const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('User not authenticated. Redirecting to login page.');
        this.router.navigate(['/login']);
        return;
    }
    // Check if title and content are not empty
    if (this.note.title.trim() === '' || this.note.content.trim() === '') {
      console.error('Title and content are required.');
      return;
    }

    this.apiService.createNote(this.note).subscribe(
      (response: any) => {
        console.log('Note created successfully', response);
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Error creating note', error);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
