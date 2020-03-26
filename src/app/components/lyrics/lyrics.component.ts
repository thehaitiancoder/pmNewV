import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.sass']
})
export class LyricsComponent implements OnInit {
  show: String = 'top100';

  constructor() { }

  ngOnInit() {
    
  }

  showCategory(category: string) {
    return category === 'rap' ? this.show = 'rap'
        :  category === 'konpa' ? this.show = 'konpa'
        :  category === 'levanjil' ? this.show = 'levanjil'
        :  category === 'rasin' ? this.show = 'rasin'
        :  category === 'kanaval' ? this.show = 'kanaval'
        :  this.show = 'top100'
  }


}
