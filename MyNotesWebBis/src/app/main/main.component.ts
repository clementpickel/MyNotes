import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  notes: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // const accessToken = localStorage.getItem('access_token');
    // if (!accessToken) {
    //   console.error('User not authenticated. Redirecting to login page.');
    //   this.router.navigate(['/login']);
    // }
    this.getNotes();
  }

  goToEditNote(id: number, title: string, content: string): void {
    this.router.navigate(['/editnote', id], {
      queryParams: {
        title,
        content,
      },
    });
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

  disconnect(): void {
    this.authService.removeAccessToken();
    this.router.navigate(['/login']);
  }

  redirectNewNote(): void {
    this.router.navigate(['/newnote']);
  }

  deleteUser(): void {
    // Call the deleteCurrentUser method from the AuthService
    this.apiService.deleteCurrentUser().subscribe(
      (response: any) => {
        console.log('User deleted successfully', response);
        // Handle success, e.g., navigate to the login page
      },
      (error: any) => {
        console.error('Error deleting user', error);
        // Handle the error, e.g., show an error message to the user
      }
    );
  }
  deleteNote(noteId: number): void {

    this.apiService.deleteNote(noteId).subscribe(
      (response) => {
        console.log('Note deleted successfully:', response);
        // Handle success, e.g., show a success message or update the UI
      },
      (error) => {
        console.error('Error deleting note:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
    this.getNotes()
  }
}
