import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/* https://devdactic.com/login-ionic-2/ */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  webDomainName: string;
  organizationName: string;
  isAllowed: boolean = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage
  ) {
  /* get web domain name from local storage, saved during the app component */
    this.storage.get('web_domain_name').then((val) => {
         this.webDomainName = val;
    });
    /* get organization name from local storage, saved during the app component */
    this.storage.get('organization_name').then((val) => {
         this.organizationName = val;
    });
    /* get user permissions from local storage */
    this.storage.get('logged_in_user_responsibilities').then((val) => {
         this.isAllowed = (val.indexOf("login_view") != -1);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
