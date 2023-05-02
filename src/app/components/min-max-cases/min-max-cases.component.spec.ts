import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxCasesComponent } from './min-max-cases.component';

describe('MinMaxCasesComponent', () => {
  let component: MinMaxCasesComponent;
  let fixture: ComponentFixture<MinMaxCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
