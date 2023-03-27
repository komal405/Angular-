import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Data[]>('http://localhost:3000/posts');
  }
  create(payload: Data) {
    return this.http.post<Data>('http://localhost:3000/posts', payload);
  }
  getById(id: number) {
    return this.http.get<Data>(`http://localhost:3000/posts/${id}`);
   }
    
   update(payload:Data){
    return this.http.put(`http://localhost:3000/posts/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Data>(`http://localhost:3000/posts/${id}`);
 }
}
