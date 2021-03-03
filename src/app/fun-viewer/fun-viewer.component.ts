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

  category: string = '';

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
    // this.categories$ = this.chuckNorrisService.fetchCategories();
    this.paragraphs$ = this.chuckNorrisService
      .fetchCategories()
      .subscribe((response) => {
        this.responseData1 = response[0];
      });
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  onCategoriesClick(category: string) {
    console.log(category);
    this.category = category;
    this.paragraphs$ = this.chuckNorrisService
      .fetchFact(category)
      .pipe(map((fact: string[]) => new Array(10).fill(fact)));
  }

  getTitle() {
    return `Chuck Norris Facts: ${this.category}`;
  }
}
