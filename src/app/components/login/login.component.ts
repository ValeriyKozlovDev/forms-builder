import { User } from './../../interfaces';
import { AuthService } from './../../services/auth.service';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  haveAcc = true
  formGroup!: FormGroup;
  submitted = false
  @Input() formError = '';
  message!: string
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please sign in'
      } else if (params['authFailed']) {
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
      this.auth.create(user).subscribe((response) => {
        console.log(response)
        this.signIn(user)
      }, () => {
        this.submitted = false
      }
      )
    }
  }

  signIn(user: User) {
    this.auth.login(user).subscribe((response) => {
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
}
