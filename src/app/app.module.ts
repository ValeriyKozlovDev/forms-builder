import { NumberInputComponent } from './components/fields/number-input/number-input.component';
import { TextInputComponent } from './components/fields/text-input/text-input.component';
import { SelectorComponent } from './components/fields/selector/selector.component';
import { CheckboxComponent } from './components/fields/checkbox/checkbox.component';
import { ColorInputComponent } from './components/fields/color-input/color-input.component';
import { StylesPipe } from './pipes/styles.pipe';
import { FormStylesComponent } from './components/main/form-styles/form-styles.component';
import { FormEffects } from './store/form.effects';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { NgModule, isDevMode, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { FormElementsComponent } from './components/main/form-elements/form-elements.component'
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ListElementsComponent } from './components/main/list-elements/list-elements.component';
import { LoaderComponent } from './components/loader/loader.component';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralFormStylesComponent } from './components/main/form-styles/general-form-styles/general-form-styles.component';
import { ElementsStylesComponent } from './components/main/form-styles/elements-styles/elements-styles.component';



const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    FormElementsComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    ListElementsComponent,
    FormStylesComponent,
    LoaderComponent,
    StylesPipe,
    GeneralFormStylesComponent,
    ElementsStylesComponent,
    ColorInputComponent,
    CheckboxComponent,
    SelectorComponent,
    TextInputComponent,
    NumberInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([FormEffects]),
  ],
  providers: [AuthService, AuthGuard, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
