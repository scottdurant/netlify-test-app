import { Component, OnInit } from '@angular/core';
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
  headers: string[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    // this.quoteService.getQuotes().subscribe((resp) => {
    //   const keys = resp.headers.keys();
    //   this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);

    //   this.quotes = { ...resp.body! };
    //   console.log(this.quotes);
    // });

    this.quoteService.getQuotes().subscribe((data) => {
      console.log(data);
      this.quotes = JSON.parse(JSON.stringify(data.body));
      console.log(this.quotes);
    });
  }
}
