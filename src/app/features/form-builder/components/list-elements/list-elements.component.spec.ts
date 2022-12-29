import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ListElementsComponent } from './list-elements.component';

describe('ListElementsComponent', () => {
  let component: ListElementsComponent;
  let fixture: ComponentFixture<ListElementsComponent>;

  let store: MockStore<{}>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ListElementsComponent],
      providers: [provideMockStore({ initialState })]

    })
      .compileComponents();

    fixture = TestBed.createComponent(ListElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
