import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../Store/Model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseurl = 'http://localhost:3000/book';
  constructor(private http: HttpClient) {

  }

  GetAll() {
    return this.http.get<Books[]>(this.baseurl);
  }

  Getbyid(id: number) {
    return this.http.get<Books>(this.baseurl + '/' + id);
  }
  Delete(id: number) {
    return this.http.delete(this.baseurl + '/' + id);
  }
  Update(data: Books) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }
  Create(data: Books) {
    return this.http.post(this.baseurl, data);
  }
}
