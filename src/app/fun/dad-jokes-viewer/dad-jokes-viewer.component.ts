import { Component, OnInit } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  facts: Observable<string[]> = of([]);

  constructor(private dadjokesService: DadJokesService) {}

  ngOnInit() {}

  loadFacts() {
    this.facts = this.dadjokesService.fetchJokes();
  }
}
