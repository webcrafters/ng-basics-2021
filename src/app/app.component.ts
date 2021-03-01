import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'ng-basics-2021';
  currentTitle = 'Hello Spring!🌸';
  allParagraphs = [
    'I am sittingI am sittingI am sittingI am sittingI am sittingI am sittingI am sittingI am sittingI am sitting',
    'In the morning',
    'At the diner',
    'On the corner',
    'I am waiting',
    'At the counter',
    'For the man',
    'To pour the coffee',
    'And he fills it',
    'Only halfway',
    'And before',
    'I even argue',
    'He is looking',
    'Out the window',
    'At somebody',
    'Coming in',
  ];
}
