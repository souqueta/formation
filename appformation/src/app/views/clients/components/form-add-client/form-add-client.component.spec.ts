import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddClientComponent } from './form-add-client.component';

describe('FormAddClientComponent', () => {
  let component: FormAddClientComponent;
  let fixture: ComponentFixture<FormAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
