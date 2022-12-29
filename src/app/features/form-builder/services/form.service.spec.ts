import { environment } from './../../../../environments/environment';
import { FormService } from 'src/app/features/form-builder/services/form.service';
import { Field } from './../store/interfaces';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'


describe('FormService - testing HTTP request method getData()', () => {
  let httpTestingController: HttpTestingController
  let formService: FormService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormService],
    })

    formService = TestBed.get(FormService)
    httpTestingController = TestBed.get(
      HttpTestingController
    )
  })

  it('should make request to get fields', () => {
    const expectedFields: Field[] =
      [{
        "id": 1,
        "type": "input",
        "styles": [
          "label",
          "placeholder",
          "width",
          "height",
          "font size",
          "font weight",
          "color input",
          "border type",
          "border color",
          "required"
        ]
      }, {
        "id": 2,
        "type": "textarea",
        "styles": [
          "label",
          "placeholder",
          "width",
          "height",
          "font size",
          "font weight",
          "color input",
          "border type",
          "border color",
          "required"
        ]
      },
      {
        "id": 3,
        "type": "button",
        "styles": [
          "label",
          "width",
          "height",
          "font size",
          "font weight",
          "color",
          "border type",
          "border color",
          "background color"
        ]
      }];
    formService
      .getFields()
      .subscribe((response) => expect(response).toBe(expectedFields))

    const req = httpTestingController.expectOne(`${environment.server}fields`)

    expect(req.request.method).toBe('GET')

    req.flush(expectedFields)
  })

  it('should make request to get border types', () => {
    const expectedFields: string[] = ['first', 'second']

    formService
      .getBorderTypes()
      .subscribe((response) => expect(response).toBe(expectedFields))

    const req = httpTestingController.expectOne(`${environment.server}borderTypes`)

    expect(req.request.method).toBe('GET')

    req.flush(expectedFields)
  })



  afterEach(() => httpTestingController.verify())
})
