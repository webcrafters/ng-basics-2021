import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dad-jokes-viewer',
  templateUrl: './dad-jokes-viewer.component.html',
  styleUrls: ['./dad-jokes-viewer.component.scss'],
})
export class DadJokesViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  loadFacts() {}

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }

  getTitle(): string {
    return `Dad Jokes`;
  }
}
