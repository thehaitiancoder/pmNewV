import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artists-alpha',
  templateUrl: './artists-alpha.component.html',
  styleUrls: ['./artists-alpha.component.sass']
})
export class ArtistsAlphaComponent implements OnInit {
  @Input() title = String;

  constructor() {}

  ngOnInit() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
