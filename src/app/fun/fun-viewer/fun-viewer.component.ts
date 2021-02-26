import { Component, Input, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../chuck-norris.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  facts$: Observable<string[]> = of([]);

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  ngOnInit() {
    this.facts$ = this.chuckNorrisSvc
      .fetchFact()
      .pipe(map((fact: string) => new Array(20).fill(fact)));
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
