import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormStylesComponent } from './general-form-styles.component';

describe('GeneralFormStylesComponent', () => {
  let component: GeneralFormStylesComponent;
  let fixture: ComponentFixture<GeneralFormStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFormStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFormStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
