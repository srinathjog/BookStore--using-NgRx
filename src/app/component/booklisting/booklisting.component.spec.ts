import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistingComponent } from './booklisting.component';

describe('BooklistingComponent', () => {
  let component: BooklistingComponent;
  let fixture: ComponentFixture<BooklistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooklistingComponent]
    });
    fixture = TestBed.createComponent(BooklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
