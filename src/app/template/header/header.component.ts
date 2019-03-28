import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Modelo Sso';

  constructor(private oauthService: OAuthService) {
  }

  public login() {
      this.oauthService.initImplicitFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }

  public get userName() {
      const claims: any = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims.name;
  }

  public get userMatricula() {
      const claims: any = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims.preferred_username;
  }

  ngOnInit() {
  }

}
