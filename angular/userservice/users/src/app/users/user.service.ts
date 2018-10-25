import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';
import { JsonRsp} from '../json-resp.class';

const url: string = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonRsp> {
    return this.http.get(url + 'list') as Observable<JsonRsp>;
  }

  get(id): Observable<JsonRsp> {
    return this,this.http.get(url + 'get/'+ id) as Observable<JsonRsp>;
  }

  create(user: User): Observable<JsonRsp> {
    return this.http.post(url + 'create', user) as Observable<JsonRsp>;
  }
  
  change(user: User): Observable<JsonRsp> {
    return this.http.post(url + 'change', user) as Observable<JsonRsp>;
  }

  remove(user: User): Observable<JsonRsp> {
    return this.http.post(url + 'remove', user) as Observable<JsonRsp>;
  }
  constructor(private http: HttpClient) { }
}
