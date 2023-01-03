import { State } from './../../../store/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from './../../../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { error } from 'console';


describe('AuthService', () => {
  let httpTestingController: HttpTestingController
  let authService: AuthService
  let mockStore: MockStore<State>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, provideMockStore()],
    })

    authService = TestBed.get(AuthService)
    httpTestingController = TestBed.get(
      HttpTestingController
    )
    mockStore = TestBed.get(Store);

  })

  // it('', () => {
  //   let error!: HttpErrorResponse
  //   authService.handleError(error)
  //   expect(authService.error$).toHaveBeenCalled()
  // })
  // afterEach(() => httpTestingController.verify())
})
