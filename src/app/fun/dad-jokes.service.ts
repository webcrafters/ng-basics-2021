import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  constructor(private http: HttpClient) {}

  fetchJokes(howMany?: number, searchTerm?: string): Observable<string[]> {
    const url = 'https://icanhazdadjoke.com/';

    const requests: Observable<string>[] = new Array(howMany ?? 20)
      .fill(undefined)
      .map(() =>
        this.http
          .get<{ joke: string }>(url, {
            headers: { Accept: 'application/json' },
          })
          .pipe(map((data: { joke: string }) => data.joke))
      );
    return forkJoin(requests);
  }
}
