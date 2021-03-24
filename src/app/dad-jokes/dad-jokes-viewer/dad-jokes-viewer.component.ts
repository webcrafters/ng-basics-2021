import { Component, OnInit, Input } from '@angular/core';
import { DadJokesService } from '../dad-jokes.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isPositiveValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const howMany: number = +control.value;
    return Number.isInteger(howMany) && howMany > 0
      ? null
      : { isNegative: control.value };
  };
}

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  jokes$: Observable<string[]> = this.dadJokesSvc.jokes$;

  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
    howMany: new FormControl('20', isPositiveValidator()),
  });

  constructor(private dadJokesSvc: DadJokesService) {}

  ngOnInit(): void {}

  loadJokes() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    const howMany = this.searchForm.get('howMany')?.value;

    if (this.searchForm.valid) {
      this.dadJokesSvc.loadJokes(searchTerm, howMany);
    }
  }

  _validateHowMany(v: string) {
    return +v > 0;
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  getTitle(): string {
    return `Dad Jokes`;
  }
}
