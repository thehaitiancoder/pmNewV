import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-news-navbar',
  templateUrl: './news-navbar.component.html',
  styleUrls: ['./news-navbar.component.sass']
})
export class NewsNavbarComponent implements OnInit {
  @Output() emittedCategory = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeCategory(category: string) {
    this.emittedCategory.emit(category);
  }

}
