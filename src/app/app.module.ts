import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LyricNavbarComponent } from './components/lyric-navbar/lyric-navbar.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { FeaturedArtistsComponent } from './components/featured-artists/featured-artists.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { LatestVideoComponent } from './components/latest-video/latest-video.component';
import { AdsenseOnHomeDesktopComponent } from './components/adsense-on-home-desktop/adsense-on-home-desktop.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { LdbAdsOnTopComponent } from './components/ldb-ads-on-top/ldb-ads-on-top.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NewsComponent } from './components/news/news.component';
import { ArtistsNameAlphabeticalComponent } from './components/artists-name-alphabetical/artists-name-alphabetical.component';
import { NewsNavbarComponent } from './components/news-navbar/news-navbar.component';
import { PunchlineComponent } from './components/punchline/punchline.component';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { AdsSidebarComponent } from './components/ads-sidebar/ads-sidebar.component';
import { ArtistsAlphaComponent } from './components/artists-alpha/artists-alpha.component';
import { NewsCategoryComponent } from './components/news-category/news-category.component';
import { SongComponent } from './components/song/song.component';
import { SongFactsComponent } from './components/song-facts/song-facts.component';
import { SongBreadcrumbComponent } from './components/song-breadcrumb/song-breadcrumb.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LeaderboardAdsOnHomePageComponent } from './components/leaderboard-ads-on-home-page/leaderboard-ads-on-home-page.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LyricNavbarComponent,
    HomeCarouselComponent,
    FeaturedArtistsComponent,
    TopSongsComponent,
    LatestVideoComponent,
    AdsenseOnHomeDesktopComponent,
    SearchResultsComponent,
    LyricsComponent,
    LdbAdsOnTopComponent,
    ArtistsComponent,
    NewsComponent,
    ArtistsNameAlphabeticalComponent,
    NewsNavbarComponent,
    PunchlineComponent,
    NewsSidebarComponent,
    AdsSidebarComponent,
    ArtistsAlphaComponent,
    NewsCategoryComponent,
    SongComponent,
    SongFactsComponent,
    SongBreadcrumbComponent,
    CommentsComponent,
    LeaderboardAdsOnHomePageComponent,
    NewsArticleComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
