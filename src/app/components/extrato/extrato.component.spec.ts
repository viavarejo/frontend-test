import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoComponent } from './extrato.component';

describe('ExtratoComponent', () => {
  let component: ExtratoComponent;
  let fixture: ComponentFixture<ExtratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
