import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  paragraphs: string[] = [];

  // paragraphsTest: string[] = [
  //   'P1',
  //   'P2',
  //   'P3',
  //   'P4',
  //   'P5',
  //   'P6',
  //   'P7',
  //   'P8',
  //   'P9',
  //   'P10',
  // ];

  currentTitle = 'Test Title';

  constructor() {}

  ngOnInit(): void {
    this.paragraphs = new Array(20)
      .fill('This is paragraph')
      .map((p, i) => `${p}: ${i + 1}`);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
