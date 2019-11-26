import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getPeopleByName(text: string) {
    console.log('text', text);
    const params = new HttpParams().append('q', text);
    return this.http.get<any>('http://localhost:3000/people', { params });
  }
}
