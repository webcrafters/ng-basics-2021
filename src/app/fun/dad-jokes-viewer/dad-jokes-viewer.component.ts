import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  facts: Observable<string[]> = of([]);

  @Input() isHorizontal: boolean = true;

  constructor(private dadjokesService: DadJokesService) {}

  ngOnInit() {}

  loadFacts(searchFact: string) {
    this.facts = this.dadjokesService.fetchJokes();
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
