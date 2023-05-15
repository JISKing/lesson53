import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedUserComponent } from './added-user.component';

describe('AddedUserComponent', () => {
  let component: AddedUserComponent;
  let fixture: ComponentFixture<AddedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedUserComponent]
    });
    fixture = TestBed.createComponent(AddedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
