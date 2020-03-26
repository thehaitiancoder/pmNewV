import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.sass']
})
export class NewsCategoryComponent implements OnInit {
  @Input() title = String;

  constructor() { }

  ngOnInit() {
  }

}
