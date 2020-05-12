import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SingleProfileComponent } from './profile-list/single-profile/single-profile.component';
import { ProfileFormComponent } from './profile-list/profile-form/profile-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'profile', component: ProfileListComponent },
  { path: 'profile/new', component: ProfileFormComponent },
  { path: 'profile/view/:id', component: SingleProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProfileListComponent,
    SingleProfileComponent,
    ProfileFormComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [AuthService, ProfileService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
