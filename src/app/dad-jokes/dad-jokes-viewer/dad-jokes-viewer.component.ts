import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  jokes$: Observable<string[]> = this.dadJokesSvc.jokes$;

  searchTerm = '';

  constructor(private dadJokesSvc: DadJokesService) {}

  ngOnInit(): void {}

  loadJokes() {
    this.dadJokesSvc.loadJokes(this.searchTerm);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  applySearchTerm(v: string) {
    this.searchTerm = v;
  }

  getTitle(): string {
    return `Dad Jokes`;
  }
}
