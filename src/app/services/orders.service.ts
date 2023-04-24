import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.APIBaseURL;

  postOrder(data: any) {
    return this.http.post<any>(this.baseUrl + '/orders/dashboard', data);
  }

  getAllOrders() {
    return this.http.get<any>(this.baseUrl + '/orders/dashboard');
  }

  deleteOrder(id: any) {
    return this.http.delete<any>(this.baseUrl + '/orders/dashboard/' + id);
  }

  updateOrder(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + '/orders/dashboard/' + id, data);
  }
}
