import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DadJokesService } from '../dad-jokes.service';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss'],
})
export class DadJokesComponent implements OnInit {
  title: string = 'Dad Jokes';
  facts: string[] = [];

  constructor(private dadJokessService: DadJokesService) {}

  ngOnInit() {}

  async loadFacts() {
    this.facts = await this.dadJokessService.fetchJokes();
  }

  // async loadFacts() {
  //   const newFacts = await this.dadJokessService.fetchJokes();
  //   this.facts = newFacts

  //   // this.facts = [...this.facts, ...jokes];
  // }
}
