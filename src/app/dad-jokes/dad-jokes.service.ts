import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  private _loadRequestByUser$: EventEmitter<{
    searchTerm: string;
    howMany: string;
  }> = new EventEmitter<{ searchTerm: string; howMany: string }>();

  get jokes$(): Observable<string[]> {
    return this._loadRequestByUser$.pipe(
      mergeMap(({ searchTerm, howMany }) =>
        this._fetchJokes(howMany, searchTerm)
      )
    );
  }

  constructor(private http: HttpClient) {}

  loadJokes(searchTerm: string, howMany: string) {
    this._loadRequestByUser$.emit({ searchTerm, howMany });
  }

  private _fetchJokes(
    howMany?: string,
    searchTerm?: string
  ): Observable<string[]> {
    const url = `https://icanhazdadjoke.com/search`;

    return this.http
      .get<{ results: { joke: string }[] }>(url, {
        headers: { Accept: 'application/json' },
        params: { term: searchTerm ?? '', limit: howMany ?? '20' },
      })
      .pipe(
        map((data: { results: { joke: string }[] }) =>
          data.results.map((r) => r.joke)
        )
      );
  }
}
