import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesFormComponent } from './solicitantes-form.component';

describe('SolicitantesFormComponent', () => {
  let component: SolicitantesFormComponent;
  let fixture: ComponentFixture<SolicitantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitantesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
