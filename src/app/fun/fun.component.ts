import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss'],
})
export class FunComponent implements OnInit {
  @Input() title: string = new Input();
  @Input() paragraphs: string[] = new Input();

  constructor() {}

  ngOnInit(): void {}
}
