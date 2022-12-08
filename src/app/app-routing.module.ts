import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
