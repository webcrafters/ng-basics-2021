import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunViewerComponent } from './fun-viewer.component';

describe('FunViewerComponent', () => {
  let component: FunViewerComponent;
  let fixture: ComponentFixture<FunViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
