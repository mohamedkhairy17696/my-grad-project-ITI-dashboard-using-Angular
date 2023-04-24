import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GigsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.APIBaseURL;

  postGig(data: any) {
    return this.http.post<any>(this.baseUrl + '/gigs/dashboard', data);
  }

  getAllGigs() {
    return this.http.get<any>(this.baseUrl + '/gigs/dashboard');
  }

  deleteGig(id: any) {
    return this.http.delete<any>(this.baseUrl + '/gigs/dashboard/' + id);
  }

  updateGig(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + '/gigs/dashboard/' + id, data);
  }
}
