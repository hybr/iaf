import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { Home } from '../pages/home/home';
import { WebPage } from '../pages/web-page/web-page';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Home
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public storage: Storage
  ) {
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'About', component: WebPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage }
    ];

  }

  /**
   * @function _2g to get the web domain name of from the url
   * @return {string} the domain name from url
   */
 _0g: string; /* web_domain_name */
 _1g: string; /* organization_name */
 _2g() { /* get web_domain_name */
    this._0g = "farm.hybr.in"; /* web_domain_name */
    this._1g = "Demo"; /* organization_name */
    var _1l = location.hostname.replace(/www\./g, "");
    if (_1l == 'localhost') {_1l = this._0g;}
   return _1l;
  };

  initializeApp() {
    
    this.storage.ready().then(() => {
      var responsibilities = [];
      this.storage.set('web_domain_name', this._2g());
      this.storage.set('organization_name', this._1g);
      /* public features are added to allowed responsibilities */
      responsibilities.push('web-page_view');
      responsibilities.push('login_view');
      this.storage.set('logged_in_user_responsibilities', responsibilities);
    });
     
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
