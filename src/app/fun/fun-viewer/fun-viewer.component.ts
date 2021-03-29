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

  categories: string[] = [];

  facts: string[] = [];

  selectedCategory: string = 'all';

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  async ngOnInit() {
    this.categories = ['all', ...(await this.chuckNorrisSvc.fetchCategories())];
  }

  async loadFacts() {
    const categoryParameter =
      this.selectedCategory === 'all' ? undefined : this.selectedCategory;
    const newFacts = await this.chuckNorrisSvc.fetchFacts(categoryParameter);
    // this.facts = newFacts;

    this.facts = [...this.facts, ...newFacts];
    // this.facts.push(...newFacts);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getTitle(): string {
    const suffix =
      this.selectedCategory === undefined
        ? ''
        : ` - ${this.selectedCategory.toUpperCase()}`;
    return `Chuck Norris Facts${suffix}`;
  }
}
