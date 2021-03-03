import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  // fetchFact() {
  //   return this.http
  //     .get<{ value: string }>('https://api.chucknorris.io/jokes/random')
  //     .pipe(map((data: { value: string }) => data.value));
  // }

  fetchFact(category?: string): Observable<string[]> {
    const jokesURL = 'https://api.chucknorris.io/jokes/random';
    const paramsURl = `?category=${category}`;

    let response1 = this.http
      .get<{ value: string }>(`${jokesURL}/${paramsURl}`)
      .pipe(map((data: { value: string }) => data.value));
    let response2 = this.http
      .get<{ value: string }>(`${jokesURL}/${paramsURl}`)
      .pipe(map((data: { value: string }) => data.value));
    let response3 = this.http
      .get<{ value: string }>(`${jokesURL}/${paramsURl}`)
      .pipe(map((data: { value: string }) => data.value));

    return forkJoin([response1, response2, response3]);

    // if (category) {
    //   return this.http
    //     .get<{ value: string }>(`${jokesURL}/${paramsURl}`)
    //     .pipe(map((data: { value: string }) => data.value));
    // }
    // return this.http
    //   .get<{ value: string }>(jokesURL)
    //   .pipe(map((data: { value: string }) => data.value));
  }

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }
}
