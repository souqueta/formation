import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBComponent } from './title-b.component';

describe('TitleBComponent', () => {
  let component: TitleBComponent;
  let fixture: ComponentFixture<TitleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
