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
  allQuotes: Quote[] = [];
  tenRandomQuotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getRandomQuotes();
  }

  getRandomQuotes(): void {
    // get all quotes and pick out ten random ones from the 4 main characters
    this.quoteService.getAllQuotes().subscribe((data: { quotes: Quote[] }) => {
      this.allQuotes = data.quotes;
      while (this.tenRandomQuotes.length < 10) {
        let randomQuote = this.allQuotes[Math.floor(Math.random() * 422)];
        if (Object.keys(Characters).includes(randomQuote.author)) {
          this.tenRandomQuotes.push(randomQuote);
        }
      }
    });
  }
}
