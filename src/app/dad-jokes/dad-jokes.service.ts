import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, scan, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  private _loadRequestByUser$: EventEmitter<any> = new EventEmitter<any>();

  get jokes$(): Observable<string[]> {
    return this._loadRequestByUser$.pipe(
      mergeMap(() => this._fetchJokes()),
      scan((acc, curr) => [...acc, ...curr], [] as string[])
    );
  }

  constructor(private http: HttpClient) {}

  loadJokes() {
    this._loadRequestByUser$.emit();
  }

  private _fetchJokes(howMany?: number): Observable<string[]> {
    const url = `https://icanhazdadjoke.com/`;

    const requests: Observable<string>[] = new Array(howMany ?? 20)
      .fill(undefined)
      .map(() =>
        this.http
          .get<{ joke: string }>(url, {
            headers: { Accept: 'application/json' },
          })
          .pipe(map((data: { joke: string }) => data.joke))
      );
    const bundle: Observable<string[]> = forkJoin(requests);
    return bundle;
  }
}
