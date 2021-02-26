import { Component, Input, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-fun-viewer',
  templateUrl: './fun-viewer.component.html',
  styleUrls: ['./fun-viewer.component.scss'],
})
export class FunViewerComponent implements OnInit {
  @Input() isHorizontal: boolean = false;

  paragraphs: string[] = [];

  constructor(private loremIpsumGenerator: LoremIpsum) {}

  ngOnInit(): void {
    const gen = this.loremIpsumGenerator.generator;
    gen.sentencesPerParagraph.min = 2;
    gen.sentencesPerParagraph.max = 4;
    gen.wordsPerSentence.min = 8;
    gen.wordsPerSentence.max = 20;
    this.paragraphs = this.loremIpsumGenerator
      .generateParagraphs(20)
      .split('\n');
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
