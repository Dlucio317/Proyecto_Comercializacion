import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacioncompraComponent } from './confirmacioncompra.component';

describe('ConfirmacioncompraComponent', () => {
  let component: ConfirmacioncompraComponent;
  let fixture: ComponentFixture<ConfirmacioncompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacioncompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacioncompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
