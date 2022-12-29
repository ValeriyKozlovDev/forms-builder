import { NgControl } from '@angular/forms';
import { AppModule } from './../../../../../app.module';
import { CheckboxComponent } from './checkbox.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [CheckboxComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
