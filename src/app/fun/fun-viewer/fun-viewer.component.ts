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

  facts$: Observable<string[]> = this.chuckNorrisSvc.facts$;

  selectedCategory: string = 'all';

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  ngOnInit() {
    this.categories$ = this.chuckNorrisSvc
      .fetchCategories()
      .pipe(map((categories: string[]) => ['all', ...categories]));
  }

  loadFacts() {
    this.chuckNorrisSvc.loadFacts(this.selectedCategory);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getTitle(): string {
    const suffix =
      this.selectedCategory === 'all'
        ? ''
        : ` - ${this.selectedCategory.toUpperCase()}`;
    return `Chuck Norris Facts${suffix}`;
  }
}
