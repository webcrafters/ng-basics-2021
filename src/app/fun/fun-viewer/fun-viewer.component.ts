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

  categories$: Observable<string[]> = of([]);

  facts$: Observable<string[]> = of([]);

  selectedCategory: string | undefined;

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  ngOnInit() {
    this.categories$ = this.chuckNorrisSvc.fetchCategories();
    this._updateFacts();
  }

  private _updateFacts() {
    this.facts$ = this.chuckNorrisSvc.fetchFacts(this.selectedCategory);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this._updateFacts();
  }

  getTitle(): string {
    const suffix =
      this.selectedCategory === undefined
        ? ''
        : ` - ${this.selectedCategory.toUpperCase()}`;
    return `Chuck Norris Facts${suffix}`;
  }
}
