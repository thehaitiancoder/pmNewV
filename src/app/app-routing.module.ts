import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NewsComponent } from './components/news/news.component';
import { SongComponent } from './components/song/song.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lyrics', component: LyricsComponent},
  {path: 'lyrics/:slug', component: SongComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'news', component: NewsComponent},
  {path: ':artist', component: ArtistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
