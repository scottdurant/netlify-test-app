import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private http: HttpClient, private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
    console.log('quotes is: ', this.quotes);
  }
}
