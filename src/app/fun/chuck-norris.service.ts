import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  async fetchCategories(): Promise<string[]> {
    // return ['Food', 'History', 'Fashion', 'Sports', 'Science'];

    const requestAsStream = this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );

    return requestAsStream.toPromise();
  }

  async fetchFacts(category?: string, howMany?: number): Promise<string[]> {
    const params = category ? `?category=${category}` : '';
    const url = `https://api.chucknorris.io/jokes/random${params}`;

    // ELABORATE SOLUTION
    const emptyArray = new Array(howMany ?? 10).fill(undefined);
    const requestGenerator = () =>
      this.http
        .get<{ value: string }>(url)
        .pipe(map((data: { value: string }) => data.value));

    // an array of requests that each return an Observable<string>
    const requests: Observable<string>[] = emptyArray.map(requestGenerator);

    const bundleOfRequests: Observable<string[]> = forkJoin(requests);
    return bundleOfRequests.toPromise();

    // COMPACT SOLUTION
    // const requests: Observable<string>[] = new Array(howMany ?? 10)
    //   .fill(undefined)
    //   .map(() =>
    //     this.http
    //       .get<{ value: string }>(url)
    //       .pipe(map((data: { value: string }) => data.value))
    //   );
    // return forkJoin(requests);
  }
}
