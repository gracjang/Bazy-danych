import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChorobyPacjenta } from '../ChorobyPacjenta';

@Injectable({
  providedIn: 'root'
})
export class ChorobyPacjentaService {

  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

    getAllPersonSick() {
      return this.http.get(this.baseUrl + 'chorobypacjenta');
  }

  deletePersonSick(id: number) {
     return this.http.delete(this.baseUrl + 'chorobypacjenta/' + id);
  }
  putPersonSick(formData: ChorobyPacjenta) {
    return this.http.put(this.baseUrl + 'chorobypacjenta/', formData);
}
  addPersonSick(formData: ChorobyPacjenta) {
    return this.http.post(this.baseUrl + 'chorobypacjenta/', formData);
  }

}
