import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss'],
})
export class DadJokesComponent implements OnInit {
  @Input() facts: string[] = new Input();

  constructor() {}

  ngOnInit() {}
}
