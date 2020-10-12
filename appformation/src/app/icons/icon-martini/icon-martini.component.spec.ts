import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMartiniComponent } from './icon-martini.component';

describe('IconMartiniComponent', () => {
  let component: IconMartiniComponent;
  let fixture: ComponentFixture<IconMartiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMartiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMartiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
