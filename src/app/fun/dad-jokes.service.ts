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

    const requests: Observable<string>[] = new Array(howMany ?? 20)
      .fill(undefined)
      .map(() =>
        this.http
          .get<{ joke: string }>(url, {
            headers: { Accept: 'application/json' },
            params: queryParams,
          })
          .pipe(map((data: { joke: string }) => data.joke))
      );

    return forkJoin(requests);
  }

  loadFacts(searchTerm: string): Observable<string[]> {
    return this.fetchJokes(searchTerm);
  }
}
