import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.sass']
})
export class TopSongsComponent implements OnInit {
  @Input() title: String = '';
  @Input() category = String;
  slug: String = 'tuipe-ya-tuipe';
  hideSongRank: boolean = false;
  ifCategoryCarnival: boolean = false;
  addLeadClass: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    if (this.title === 'Top 100') this.hideSongRank = true;
    if (this.title === 'Kanaval') this.ifCategoryCarnival = true;
    if (this._router.url === '/') this.addLeadClass = true;
  }

}
