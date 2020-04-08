import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  authSectionHeader: string = 'Konekte sou PawolMizik';
  userIsSignIn: boolean = false;
  userIsSignUp: boolean = false;
  userIsRecoveringPassword = false;
  showSearchSection: boolean = false;

  constructor() {}

  ngOnInit() {}

  showSearch(searchIsActive: boolean): void {
    searchIsActive
      ? (this.showSearchSection = true)
      : (this.showSearchSection = false);
  }

  showUserForm(action: string): void {
    if (action === 'signin') {
      this.authSectionHeader = 'Konekte sou PawolMizik';
      this.userIsSignIn = true;
      this.userIsSignUp = false;
    } else if (action === 'signup') {
      this.authSectionHeader = 'Kreye kont ou sou PawolMizik';
      this.userIsSignUp = true;
      this.userIsSignIn = false;
    } else if (action === 'recoverPassword') {
      this.authSectionHeader = 'Chanje Modpass kont ou sou PawolMizik';
      this.userIsRecoveringPassword = true;
      this.userIsSignIn = false;
      this.userIsSignUp = false;
    }
  }
}
