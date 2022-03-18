import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotesUrl: string = 'https://seinfeld-quotes.herokuapp.com/quotes';

  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<HttpResponse<{ quotes: Quote[] }>> {
    return this.http.get<{ quotes: Quote[] }>(this.quotesUrl, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
