import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
import { SearchContext } from 'src/app/models/search-context';
import { SearchContextResult } from 'src/app/models/search-context-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/user`);
  }

  search(searchContext: SearchContext): Observable<SearchContextResult<User>> {

    const params = new HttpParams()
      .set('take', String(searchContext.take))
      .set('skip', String(searchContext.skip));

    return this.http.get<SearchContextResult<User>>(`${environment.api}/user/search`, {params});
  }

  delete(id: number) {
    return this.http.delete(`${environment.api}/user/${id}`);
  }

  patch(id: number, user: any) {
    return this.http.patch(`${environment.api}/user/${id}`, user);
  }
}
