import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable, of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  facts$: Observable<string[]> = of([]);
  inputPositive: boolean = true;
  searchLimit = '';

  @Input() isHorizontal: boolean = true;

  constructor(
    private dadjokesService: DadJokesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadFacts('', 20);
  }

  loadFacts(searchTerm: string, searchLimit: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { searchTerm, searchLimit },
      queryParamsHandling: 'merge',
    });
    this.inputPositive = searchLimit;
    if (searchLimit > 0) {
      this.facts$ = this.dadjokesService.fetchJokes(searchTerm, searchLimit);
    } else if (searchLimit <= 0) {
      this.inputPositive = !this.inputPositive;
      this.facts$ = of([]);
    }
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
