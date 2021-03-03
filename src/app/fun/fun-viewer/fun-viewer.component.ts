import { Component, Input, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { ChuckNorrisService } from '../../chuck-norris.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  paragraphs$: Observable<string[]> = of([]);

  constructor(private chuckSvc: ChuckNorrisService) {}

  ngOnInit(): void {
    const streamWithOneJokeAsEmission = this.chuckSvc.fetchFact();

    const streamWith20CopiesOfThatJokeInOneArray = streamWithOneJokeAsEmission.pipe(
      map((joke: string) => new Array(20).fill(joke))
    );

    this.paragraphs$ = streamWith20CopiesOfThatJokeInOneArray;
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
