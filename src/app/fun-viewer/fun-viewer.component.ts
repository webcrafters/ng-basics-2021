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

  constructor(private ipsumWordsGenerator: LoremIpsum) {}

  ngOnInit(): void {
    const ipsumWords = this.ipsumWordsGenerator.generator;
    ipsumWords.sentencesPerParagraph = {
      min: 1,
      max: 5,
    };
    ipsumWords.wordsPerSentence = {
      min: 1,
      max: 20,
    };
    this.paragraphs = ipsumWords.generateRandomParagraph(20).split('.');
    console.log(ipsumWords);
  }

  toggleLayout() {
    this.isHorizontal = !this.isHorizontal;
  }
}
