import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  constructor(private http: HttpClient) {}

  fetchJokes(searchTerm?: string, howMany?: number): Observable<string[]> {
    const url = 'https://icanhazdadjoke.com/search';
    const queryParams = { term: searchTerm ?? '' };

    return this.http
      .get<{ results: { joke: string }[] }>(url, {
        headers: { Accept: 'application/json' },
        params: queryParams,
      })
      .pipe(
        map((data: { results: { joke: string }[] }) =>
          data.results.map((res) => res.joke)
        )
      );
  }

  loadFacts(searchTerm: string): Observable<string[]> {
    return this.fetchJokes(searchTerm);
  }
}
