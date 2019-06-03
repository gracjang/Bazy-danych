import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PLany } from '../PLany';

@Injectable({
  providedIn: 'root'
})
export class PlanyService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

    getAllPlans() {
      return this.http.get(this.baseUrl + 'plany');
  }

  deletePlan(id: number) {
     return this.http.delete(this.baseUrl + 'plany/' + id);
  }
  putPlan(formData: PLany) {
    return this.http.put(this.baseUrl + 'plany/', formData);
}
  addPlan(formData: PLany) {
    return this.http.post(this.baseUrl + 'plany/', formData);
  }
}
