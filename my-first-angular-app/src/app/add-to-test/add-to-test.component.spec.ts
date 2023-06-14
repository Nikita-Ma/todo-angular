import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTestComponent } from './add-to-test.component';

describe('AddToTestComponent', () => {
  let component: AddToTestComponent;
  let fixture: ComponentFixture<AddToTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToTestComponent]
    });
    fixture = TestBed.createComponent(AddToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
