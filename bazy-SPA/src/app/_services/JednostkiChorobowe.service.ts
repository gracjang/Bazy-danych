import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Choroby } from '../Choroby';

@Injectable({
  providedIn: 'root'
})
export class JednostkiChoroboweService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

    getAllSicks() {
      return this.http.get(this.baseUrl + 'jednostkichorobowe');
  }

  deleteSick(id: number) {
     return this.http.delete(this.baseUrl + 'jednostkichorobowe/' + id);
  }
  putSick(formData: Choroby) {
    return this.http.put(this.baseUrl + 'jednostkichorobowe/', formData);
}
  addSick(formData: Choroby) {
    return this.http.post(this.baseUrl + 'jednostkichorobowe/', formData);
  }
}
