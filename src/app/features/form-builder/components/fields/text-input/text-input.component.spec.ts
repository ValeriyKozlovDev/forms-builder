import { NgControl, FormControlDirective } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent],
      providers: [TextInputComponent, {
        provide: NgControl,
        useValue: new FormControlDirective([], [], [], null)
      }]
    })
      .compileComponents();

    // .overrideComponent(TextInputComponent, {
    //   set: {
    //     providers: [
    //       {
    //         provide: NgControl,
    //         useValue: new FormControlDirective([], [], [], null)
    //       }
    //     ]
    //   }
    // });

    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should create', () => {
    component.writeValue('value')
    expect(component.value).toBe('value');
  });
});
