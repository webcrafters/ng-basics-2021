import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  // on each request for jokes, the category is specified as event payload
  private _loadRequestByUser$: EventEmitter<string> = new EventEmitter<string>();

  get facts$(): Observable<string[]> {
    // ELABORATE SOLUTION
    const clickOnLoad$: Observable<string> = this._loadRequestByUser$;

    const factsPerClickOnLoad$: Observable<string[]> = clickOnLoad$.pipe(
      mergeMap((category: string) => this._fetchFacts(category))
      // this operator is like map,
      // but instead of mapping each emission to the observable returned by _fetchFacts() ,
      // it also "unpacks" that observable, such that it maps to the actual value emitted by it.
    );
    const accumulatedFactsPerClickOnLoad$: Observable<
      string[]
    > = factsPerClickOnLoad$.pipe(
      scan((acc, curr) => [...acc, ...curr], [] as string[])
      // this operator is like reduce on arrays.
      // whenever a new emission occurs, it adds that emission to all emissions accumulated so far
    );
    return accumulatedFactsPerClickOnLoad$;

    // COMPACT SOLUTION
    // return this._loadRequestByUser$.pipe(
    //   mergeMap((category: string) => this._fetchFacts(category)),
    //   scan((acc, curr) => [...acc, ...curr], [] as string[])
    // );
  }

  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }

  loadFacts(category: string) {
    this._loadRequestByUser$.emit(category);
  }

  private _fetchFacts(
    category?: string,
    howMany?: number
  ): Observable<string[]> {
    const params = category !== 'all' ? `?category=${category}` : '';
    const url = `https://api.chucknorris.io/jokes/random${params}`;

    const requests: Observable<string>[] = new Array(howMany ?? 10)
      .fill(undefined)
      .map(() =>
        this.http
          .get<{ value: string }>(url)
          .pipe(map((data: { value: string }) => data.value))
      );
    const bundle: Observable<string[]> = forkJoin(requests);
    return bundle;
  }
}
