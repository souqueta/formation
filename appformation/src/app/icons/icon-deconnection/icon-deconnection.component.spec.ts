import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDeconnectionComponent } from './icon-deconnection.component';

describe('IconDeconnectionComponent', () => {
  let component: IconDeconnectionComponent;
  let fixture: ComponentFixture<IconDeconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDeconnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDeconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
