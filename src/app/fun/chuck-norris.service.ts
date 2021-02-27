import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
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

  fetchFacts(category?: string, howMany?: number): Observable<string[]> {
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

    // we want these requests to go out in parallel, so we bundle them with the forkJoin operator
    // this is an operator that "combines" streams of data in a specific way

    // the result of forkJoin(requests) is an observable

    // when .subscribe() is executed on it, all the observables inside are being subscribed to

    // the "bundle" observable only emits when all the requests have emitted at least once

    // in our case: when fetchFacts().subscribe() is executed,
    // all the requests are sent to the API. When all responses have arrived,
    // the chuck norris facts are emitted together as an array, and the subscriber receives them

    const bundleOfRequests: Observable<string[]> = forkJoin(requests);
    return bundleOfRequests;

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
