import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  constructor(private http: HttpClient) {}

  fetchJokes(searchTerm?: string, searchLimit?: string): Observable<string[]> {
    const url = 'https://icanhazdadjoke.com/search';
    const queryParams = { term: searchTerm ?? '', limit: searchLimit ?? '20' };

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

  loadFacts(searchTerm: string, searchLimit: any): Observable<string[]> {
    return this.fetchJokes(searchTerm, searchLimit);
  }
}
