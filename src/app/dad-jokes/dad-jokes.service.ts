import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, scan, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  private _loadRequestByUser$: EventEmitter<string> = new EventEmitter<string>();

  get jokes$(): Observable<string[]> {
    return this._loadRequestByUser$.pipe(
      mergeMap((searchTerm: string) => this._fetchJokes(20, searchTerm))
    );
  }

  constructor(private http: HttpClient) {}

  loadJokes(searchTerm: string) {
    this._loadRequestByUser$.emit(searchTerm);
  }

  private _fetchJokes(
    howMany?: number,
    searchTerm?: string
  ): Observable<string[]> {
    const url = `https://icanhazdadjoke.com/search`;
    const queryParams = {
      term: searchTerm ?? '',
    };

    return this.http
      .get<{ results: { joke: string }[] }>(url, {
        headers: { Accept: 'application/json' },
        params: queryParams,
      })
      .pipe(
        map((data: { results: { joke: string }[] }) =>
          data.results.map((r) => r.joke)
        )
      );
  }
}
