import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  facts$: Observable<string[]> = of([]);
  searchTerm: string = '';

  @Input() isHorizontal: boolean = true;

  constructor(
    private dadjokesService: DadJokesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  loadFacts(searchTerm: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { searchTerm },
      queryParamsHandling: 'merge',
    });
    this.facts$ = this.dadjokesService.fetchJokes(searchTerm);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
