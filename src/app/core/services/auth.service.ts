import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
    ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(storageService.get('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.api}/user/authenticate`, { email, password })
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        this.storageService.add('currentUser', user)
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  logout(): void {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    this.storageService.remove('currentUser');
    this.currentUserSubject.next(null);
  }

}