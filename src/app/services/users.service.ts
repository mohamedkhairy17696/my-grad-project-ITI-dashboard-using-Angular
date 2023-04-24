import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.APIBaseURL;

  postUser(data: any) {
    return this.http.post<any>(this.baseUrl + '/users', data);
  }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + '/users');
  }

  deleteUser(id: any) {
    return this.http.delete<any>(this.baseUrl + '/users/' + id);
  }

  updateUser(data: any, _id: number) {
    return this.http.put<any>(this.baseUrl + '/users/' + _id, data);
  }
}
