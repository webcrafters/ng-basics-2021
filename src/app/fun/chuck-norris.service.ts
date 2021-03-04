import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  fetchCategories(): string[] {
    return ['Food', 'History', 'Fashion', 'Sports', 'Science'];
  }

  fetchFacts(category?: string): string[] {
    return [
      'Chuck Norris is Chuck Norris. This fact is undisputed.',
      'Chuck Norris knows that he is Chuck Norris. This is a big deal, but Chuck Norris is so strong that he can take it.',
      "Everybody who ever had an encounter with Chuck Norris is afraid of him. Except himself. He takes it like it's nothing, every moment.",
      'Chuck Norris has never slept in his life. At night, with eyes closed, he mentally works on his roundhouse kick. 7 hours, every single night.',
    ];
  }
}
