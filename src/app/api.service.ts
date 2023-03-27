import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {
  }

  getGente(): Observable<Persona[]> {

    return this.http.get<Persona[]>(this.baseURL + 'users')
  }


}
