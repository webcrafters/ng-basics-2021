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

  selectedCategory: string | undefined;

  constructor(private chuckNorrisSvc: ChuckNorrisService) {}

  async ngOnInit() {
    this.categories = await this.chuckNorrisSvc.fetchCategories();
    this._updateFacts();
  }

  private async _updateFacts() {
    this.facts = await this.chuckNorrisSvc.fetchFacts(this.selectedCategory);
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
