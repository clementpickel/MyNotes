// edit-note.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent {
  id: string = '';
  title: string = '';
  content: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error('User not authenticated. Redirecting to login page.');
      this.router.navigate(['/login']);
    }
    const id = this.route.snapshot.params['id'];

    this.route.queryParams.subscribe((params) => {
      this.id = id;
      this.title = params['title'];
      this.content = params['content'];
    });
  }

  updateNote(): void {
    this.apiService.updateNote(this.id, this.title, this.content).subscribe(
      (response) => {
        console.log('Note updated successfully:', response);
        // Handle success, e.g., show a success message or navigate to another page
      },
      (error) => {
        console.error('Error updating note:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
    this.router.navigate(['/']);
  }
}
