import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  fetchFact(): Observable<string> {
    return this.http
      .get<{ value: string }>('https://api.chucknorris.io/jokes/random')
      .pipe(map((response: { value: string }) => response.value));
  }
}
