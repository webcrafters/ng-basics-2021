import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  fetchFact(): Observable<string> {
    return this.http
      .get<{ value: string }>('https://api.chucknorris.io/jokes/random')
      .pipe(map((data: { value: string }) => data.value));
  }
}
