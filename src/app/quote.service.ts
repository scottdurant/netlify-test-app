import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  quotesUrl: string = 'https://seinfeld-quotes.herokuapp.com/quotes';
  constructor(private http: HttpClient) {}

  getQuotes(): Observable<HttpResponse<Quote[]>> {
    return this.http.get<Quote[]>(this.quotesUrl, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
