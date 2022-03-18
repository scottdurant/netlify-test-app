import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote';

enum Characters {
  Elaine = 'ELAINE',
  George = 'GEORGE',
  Jerry = 'JERRY',
  Kramer = 'KRAMER',
}

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getRandomQuote().subscribe((data) => {
      console.log(data);
      let allQuotes = data.body?.quotes;
      if (allQuotes) {
        while (this.quotes.length < 10) {
          let randomQuote = allQuotes[Math.floor(Math.random() * 422)];
          if (Object.keys(Characters).includes(randomQuote.author)) {
            this.quotes.push(randomQuote);
          }
          console.log(this.quotes);
        }
      }
    });
  }
}
