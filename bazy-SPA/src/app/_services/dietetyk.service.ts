import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DietetykPracownik } from '../DietetykPracownik';

@Injectable()
export class DietetykService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

    getAllDietetics() {
      return this.http.get(this.baseUrl + 'dietetyk');
  }

  deleteDietetic(id: number) {
     return this.http.delete(this.baseUrl + 'dietetyk/' + id);
  }
  putDietetic(formData: DietetykPracownik) {
    return this.http.put(this.baseUrl + 'dietetyk/', formData);
}
  addDietetic(formData: DietetykPracownik) {
    return this.http.post(this.baseUrl + 'dietetyk/', formData);
  }
}
