import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesViewerComponent } from './dad-jokes-viewer.component';

describe('DadJokesViewerComponent', () => {
  let component: DadJokesViewerComponent;
  let fixture: ComponentFixture<DadJokesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadJokesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
