import { AuthService } from './auth.service';
import { environment } from './../../../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'


describe('FormService - testing HTTP request method getData()', () => {
  let httpTestingController: HttpTestingController
  let authService: AuthService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    })

    authService = TestBed.get(AuthService)
    httpTestingController = TestBed.get(
      HttpTestingController
    )
  })

  afterEach(() => httpTestingController.verify())
})
