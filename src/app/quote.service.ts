import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}

  getQuotes(): Observable<Quote[]> {
    let tempQuotes: Quote[] = [
      {
        quote: 'Yeah I eat the whole apple.. core, stem, seeds -- everything',
        author: 'Kramer',
        season: '2',
        episode: '10',
        image: './Images/15-3.png',
      },
      {
        quote: 'something slfdkjsldfkjsdlfkj',
        author: 'someone',
        season: '22222',
        episode: '1000000',
        image: './Images/15-3.png',
      },
    ];

    const QUOTES = of(tempQuotes);
    return QUOTES;
  }
}
