import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artists-name-alphabetical',
  templateUrl: './artists-name-alphabetical.component.html',
  styleUrls: ['./artists-name-alphabetical.component.sass']
})
export class ArtistsNameAlphabeticalComponent implements OnInit {
  @Output() emittedLetter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showLetter(letter: string) {
    this.emittedLetter.emit(letter);
  }

}
