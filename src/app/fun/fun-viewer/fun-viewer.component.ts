import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  paragraphs: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.paragraphs = new Array(20)
      .fill('This is paragraph ')
      .map((t, idx) => `${t}${idx + 1}`);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
