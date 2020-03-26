import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardAdsOnHomePageComponent } from './leaderboard-ads-on-home-page.component';

describe('LeaderboardAdsOnHomePageComponent', () => {
  let component: LeaderboardAdsOnHomePageComponent;
  let fixture: ComponentFixture<LeaderboardAdsOnHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardAdsOnHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardAdsOnHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
