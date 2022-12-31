import { selectLoading, selectLoginAgain } from './store/auth.selectors';
import { State } from './../../store/index';
import { HttpClient } from '@angular/common/http';
import { Store, MemoizedSelector } from '@ngrx/store';
import { AppRoutingModule } from './../../app-routing.module';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';


class MockAuthService {
  create = true;
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoadingSelector: MemoizedSelector<State, boolean>;
  let mockLoginAgainSelector: MemoizedSelector<State, boolean>;
  let mockStore: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [LoginComponent],
      providers: [LoginComponent, { provide: AuthService, useClass: MockAuthService }, provideMockStore()]

    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.get(Store);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete formError value', () => {
    component.formError = '123'
    component.onFormChange()
    expect(component.formError).toBe('')
  })

  it('should create form with 2 controls', () => {
    expect(component.formGroup.contains('email')).toBeTruthy()
    expect(component.formGroup.contains('password')).toBeTruthy()
  })

  it('should mark field as invalid if "email" and "password" fields is empty', () => {
    let email = component.formGroup.get('email')
    let password = component.formGroup.get('password')

    email?.setValue('')
    password?.setValue('')

    expect(email?.valid).toBeFalsy()
    expect(password?.valid).toBeFalsy()
  })

  it('should mark field as invalid if "email" is not email format', () => {
    let email = component.formGroup.get('email')
    email?.setValue('email')
    expect(email?.valid).toBeFalsy()
  })

  it('should mark field as valid if "email" is email format', () => {
    let email = component.formGroup.get('email')
    email?.setValue('email@gmail.com')
    expect(email?.valid).toBeTruthy()
  })

  it('should mark field as invalid if "password" field value length less then 6', () => {
    let password = component.formGroup.get('password')
    password?.setValue('12345')
    expect(password?.valid).toBeFalsy()
  })

  it('should mark field as valid if "label" field value length 6 or more then 6', () => {
    let password = component.formGroup.get('password')
    password?.setValue('123456')
    expect(password?.valid).toBeTruthy()
  })

  it('should have assess value true', () => {
    expect(component.haveAcc).toBeTruthy()
  })

  it('should have submitted value false', () => {
    expect(component.submitted).toBeFalsy()
  })

  it('should change assess status to false', () => {
    component.haveAcc = true
    component.accStatus(false)
    expect(component.haveAcc).toBeFalsy()
  })

  it('should change assess status to true', () => {
    component.haveAcc = false
    component.accStatus(true)
    expect(component.haveAcc).toBeTruthy()
  })

  it('should have value true in loading selector', () => {
    mockLoadingSelector = mockStore.overrideSelector(selectLoading, false);
    mockLoadingSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.loading$.subscribe((result) => expect(result).toBeTruthy())
  })

  it('should have value true in loginAgain selector', () => {
    mockLoginAgainSelector = mockStore.overrideSelector(selectLoginAgain, false);
    mockLoginAgainSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.loginAgain$.subscribe((result) => expect(result).toBe(true))
  })
});
