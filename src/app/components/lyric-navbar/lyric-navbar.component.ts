import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyric-navbar',
  templateUrl: './lyric-navbar.component.html',
  styleUrls: ['./lyric-navbar.component.sass']
})
export class LyricNavbarComponent implements OnInit {
  @Output() categoryActive = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showRap(category: string) {
    this.categoryActive.emit(category);
  }

}
