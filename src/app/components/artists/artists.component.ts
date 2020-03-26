import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.sass']
})
export class ArtistsComponent implements OnInit {
  show: String = 'A';

  constructor() { }

  ngOnInit() {
  }

  displayLetter(letter: String) {
    return letter === '#' ? this.show = '#'
      : letter === 'A' ? this.show = 'A'
      : letter === 'B' ? this.show = 'B'
      : letter === 'C' ? this.show = 'C'
      : letter === 'D' ? this.show = 'D'
      : letter === 'E' ? this.show = 'E'
      : letter === 'F' ? this.show = 'F'
      : letter === 'G' ? this.show = 'G'
      : letter === 'H' ? this.show = 'H'
      : letter === 'I' ? this.show = 'I'
      : letter === 'J' ? this.show = 'J'
      : letter === 'K' ? this.show = 'K'
      : letter === 'L' ? this.show = 'L'
      : letter === 'M' ? this.show = 'M'
      : letter === 'N' ? this.show = 'N'
      : letter === 'O' ? this.show = 'O'
      : letter === 'P' ? this.show = 'P'
      : letter === 'Q' ? this.show = 'Q'
      : letter === 'R' ? this.show = 'R'
      : letter === 'S' ? this.show = 'S'
      : letter === 'T' ? this.show = 'T'
      : letter === 'U' ? this.show = 'U'
      : letter === 'V' ? this.show = 'V'
      : letter === 'W' ? this.show = 'W'
      : letter === 'X' ? this.show = 'X'
      : letter === 'Y' ? this.show = 'Y'
      : letter === 'Z' ? this.show = 'Z'
      : letter === '#'
  }

}
