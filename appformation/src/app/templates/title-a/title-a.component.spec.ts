import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAComponent } from './title-a.component';

describe('TitleAComponent', () => {
  let component: TitleAComponent;
  let fixture: ComponentFixture<TitleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
