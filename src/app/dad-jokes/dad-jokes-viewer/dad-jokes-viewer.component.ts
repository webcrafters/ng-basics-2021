import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable, of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchLimitValidators } from '../search-limit.validators';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  facts$: Observable<string[]> = of([]);
  inputPositive: boolean = true;
  title: string = '';

  form = new FormGroup({
    searchTerm: new FormControl(),
    limit: new FormControl('20', SearchLimitValidators.isInputNegative),
  });

  get jokeTitle() {
    return `Jokes with: ${this.title}`;
  }

  get limit() {
    return this.form.get('limit');
  }

  get searchTerm() {
    return this.form.get('searchTerm');
  }

  @Input() isHorizontal: boolean = true;

  constructor(
    private dadjokesService: DadJokesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadFacts('', 20);
  }

  loadFacts(searchTerm?: string, searchLimit?: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { searchTerm, searchLimit },
      queryParamsHandling: 'merge',
    });

    const joke = this.searchTerm?.value;
    const limit = this.limit?.value;

    if (this.form.valid) {
      this.facts$ = this.dadjokesService.fetchJokes(joke, limit);
      // this.getTitle();

      this.title =
        this.searchTerm?.value === null ? '' : this.searchTerm?.value;
    }
  }

  isInputNegative() {
    return this.limit?.errors?.isInputNegative;
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
