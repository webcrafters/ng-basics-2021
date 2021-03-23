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

  isValidHowMany = true;

  constructor(private dadJokesSvc: DadJokesService) {}

  ngOnInit(): void {}

  loadJokes(searchTerm: string, howMany: string) {
    const howManyAsNumber = +howMany;
    this.isValidHowMany =
      Number.isInteger(howManyAsNumber) && howManyAsNumber > 0;
    if (this.isValidHowMany) {
      this.dadJokesSvc.loadJokes(searchTerm, howMany);
    }
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  getTitle(): string {
    return `Dad Jokes`;
  }
}
