import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  webDomainName: string;
  organizationName: string;
  
  constructor(
    public navCtrl: NavController,
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
  }

}
