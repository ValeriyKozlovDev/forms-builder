import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsStylesComponent } from './elements-styles.component';

describe('ElementsStylesComponent', () => {
  let component: ElementsStylesComponent;
  let fixture: ComponentFixture<ElementsStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
