import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { UnauthorizedInterceptor } from '../interceptors/unauthorized.interceptor';



@NgModule({
  providers: [
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
