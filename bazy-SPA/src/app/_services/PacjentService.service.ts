import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacjent } from '../Pacjent';

@Injectable({
  providedIn: 'root'
})
export class PacjentServiceService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

    getAllPacjent() {
      return this.http.get(this.baseUrl + 'pacjent');
  }

  deletePacjent(id: number) {
     return this.http.delete(this.baseUrl + 'pacjent/' + id);
  }
  putPacjent(formData: Pacjent) {
    return this.http.put(this.baseUrl + 'pacjent/', formData);
}
  addPacjent(formData: Pacjent) {
    return this.http.post(this.baseUrl + 'pacjent/', formData);
  }
}
