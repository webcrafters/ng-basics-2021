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
  howMany = 20;

  isValidHowMany = true;

  constructor(private dadJokesSvc: DadJokesService) {}

  ngOnInit(): void {}

  loadJokes() {
    this.dadJokesSvc.loadJokes(this.searchTerm);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  applySearchValues(searchTerm: string, howMany: number) {
    this.searchTerm = searchTerm;
    this.isValidHowMany = Number.isInteger(howMany) && howMany > 0;
    if (this.isValidHowMany) {
      this.howMany = howMany;
    }
  }

  getTitle(): string {
    return `Dad Jokes`;
  }
}
