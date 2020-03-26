import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.sass']
})
export class SongComponent implements OnInit {
  lyric: String = '<p>This is a test</p>';

  constructor() { }

  ngOnInit() {
  }

}
