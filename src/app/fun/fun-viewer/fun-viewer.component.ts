import { Component, Input, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../chuck-norris.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent {
  @Input() isHorizontal: boolean = false;

  facts$: Observable<string> = this.chuckNorrisSvc.fetchFact();

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
