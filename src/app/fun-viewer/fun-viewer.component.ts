import { Component, Input, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { Observable, of } from 'rxjs';
import { ChuckNorrisService } from 'src/app/chuck-norris.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  public responseData1: any;
  public responseData2: any;
  public responseData3: any;

  @Input() isHorizontal: boolean = false;

  paragraphs: string[] = [];
  paragraphs$: Observable<string[]> = of([]);
  categories$: Observable<string[]> = of([]);
  // randomFacts$: Observable<string[]> = of([]);

  category: string = 'all';

  // paragraphsTest: string[] = [
  //   'P1',
  //   'P2',
  //   'P3',
  //   'P4',
  //   'P5',
  //   'P6',
  //   'P7',
  //   'P8',
  //   'P9',
  //   'P10',
  // ];

  currentTitle = 'Test Title';

  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit(): void {
    // this.paragraphs$ = this.chuckNorrisService
    //   .fetchFact()
    //   .pipe(map((fact: string[]) => new Array(10).fill(fact)));
    this.categories$ = this.chuckNorrisService
      .fetchCategories()
      .pipe(map((cat) => ['all', ...cat]));

    this.updateFacts();
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  updateFacts() {
    //WHY WHEN WE PUT UNDEFINED
    const c = this.category == 'all' ? undefined : this.category;
    this.paragraphs$ = this.chuckNorrisService.fetchFacts(c);
  }

  onCategoriesClick(category: string) {
    console.log(category);
    this.category = category;

    this.updateFacts();
  }

  getTitle() {
    return `Chuck Norris Facts: ${this.category}`;
  }
}
