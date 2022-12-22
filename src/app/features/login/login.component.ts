import { Component, Input, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReplaySubject, takeUntil } from 'rxjs';
import { selectLoginAgain } from './store/auth.selectors';
import { User } from './store/interfaces';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit, OnDestroy {
  haveAcc = true
  formGroup!: FormGroup;
  submitted = false
  @Input() formError = '';
  message!: string


  loginAgain$ = this.store.select(selectLoginAgain)

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);


  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy)).subscribe((params: Params) => {
      if (params['authFailed']) {
        this.message = 'session is over, please sign in again'
      }
    })

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return
    }
    this.submitted = true

    const user: User = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
    }
    if (this.haveAcc) {
      this.signIn(user)
    } else {
      this.auth.create(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
        this.signIn(user)
      }, () => {
        this.submitted = false
      }
      )
    }
  }

  signIn(user: User) {
    this.auth.login(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
      this.formGroup.reset()
      this.router.navigate(['/main'])
    }, () => {
      this.submitted = false
    }
    )
  }

  accStatus(haveAcc: boolean) {
    this.haveAcc = haveAcc
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
