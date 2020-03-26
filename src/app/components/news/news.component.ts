import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  show: String = 'popilè';

  constructor() { }

  ngOnInit() {
  }

  changeCategory(category: string) {
    return category === 'popular' ? this.show = 'popilè'
      : category === 'latest' ? this.show = 'nouvo'
      : category === 'rap' ? this.show = 'rap'
      : category === 'konpa' ? this.show = 'konpa'
      : category === 'world' ? this.show = 'entènasyonal'
      : this.show === 'popilè'
  }

}
