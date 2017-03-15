import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-web-page',
  templateUrl: 'web-page.html'
})
export class WebPage {
  webDomainName: string;
  organizationName: string;
  isAllowed: boolean = false;
  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;


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
         this.isAllowed = (val.indexOf("web-page_view") != -1);
    });
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This this.is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WebPage, {
      item: item
    });
  }
}
