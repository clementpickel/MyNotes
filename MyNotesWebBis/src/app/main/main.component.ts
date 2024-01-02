import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  notes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.apiService.getNotes().subscribe(
      (response: any) => {
        this.notes = response.notes;
      },
      (error: any) => {
        console.error('Error fetching notes', error);
        // Handle the error, e.g., show an error message to the user
      }
    );
  }
}
