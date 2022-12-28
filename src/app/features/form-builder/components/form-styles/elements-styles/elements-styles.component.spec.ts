import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsStylesComponent } from './elements-styles.component';

describe('ElementsStylesComponent', () => {
  let component: ElementsStylesComponent;
  let fixture: ComponentFixture<ElementsStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementsStylesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElementsStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 15 controls', () => {
    expect(component.elementsForm.contains('label')).toBeTruthy()
    expect(component.elementsForm.contains('textColor')).toBeTruthy()
    expect(component.elementsForm.contains('placeholder')).toBeTruthy()
    expect(component.elementsForm.contains('width')).toBeTruthy()
    expect(component.elementsForm.contains('height')).toBeTruthy()
    expect(component.elementsForm.contains('fontSize')).toBeTruthy()
    expect(component.elementsForm.contains('fontWeight')).toBeTruthy()
    expect(component.elementsForm.contains('required')).toBeTruthy()
    expect(component.elementsForm.contains('colorInput')).toBeTruthy()
    expect(component.elementsForm.contains('backgroundColor')).toBeTruthy()
    expect(component.elementsForm.contains('borderType')).toBeTruthy()
    expect(component.elementsForm.contains('borderColor')).toBeTruthy()
    expect(component.elementsForm.contains('color')).toBeTruthy()
    expect(component.elementsForm.contains('option')).toBeTruthy()
    expect(component.elementsForm.contains('checkboxOption')).toBeTruthy()
  })
});
