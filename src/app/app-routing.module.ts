import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NewsComponent } from './components/news/news.component';
import { SongComponent } from './components/song/song.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:slug', component: NewsArticleComponent },
  { path: 'lyrics', component: LyricsComponent },
  { path: 'lyrics/:slug', component: SongComponent },
  { path: 'artists', component: ArtistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
