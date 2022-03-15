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

    // let tempQuotes: Quote[] = [
    //   {
    //     quote: 'Yeah I eat the whole apple.. core, stem, seeds -- everything',
    //     author: 'Kramer',
    //     season: '2',
    //     episode: '10',
    //     image: './Images/15-3.png',
    //   },
    //   {
    //     quote: 'something slfdkjsldfkjsdlfkj',
    //     author: 'someone',
    //     season: '22222',
    //     episode: '1000000',
    //     image: './Images/15-3.png',
    //   },
    // ];

    // const QUOTES = of(tempQuotes);
    // return QUOTES;
  }
}
