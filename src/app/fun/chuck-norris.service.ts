import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }

  fetchFact(category?: string): Observable<string> {
    const params = category ? `?category=${category}` : '';
    const url = `https://api.chucknorris.io/jokes/random${params}`;
    return this.http
      .get<{ value: string }>(url)
      .pipe(map((data: { value: string }) => data.value));
  }
}
