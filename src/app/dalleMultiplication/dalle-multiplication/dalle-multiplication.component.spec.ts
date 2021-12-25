import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleMultiplicationComponent } from './dalle-multiplication.component';

describe('DalleMultiplicationComponent', () => {
  let component: DalleMultiplicationComponent;
  let fixture: ComponentFixture<DalleMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalleMultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalleMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
