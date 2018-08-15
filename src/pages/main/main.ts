import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  public name: string;
  private counter: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  public nextPage(page) {
    this.navCtrl.push(page);
  }

  public openContact() {
    this.navCtrl.push(ContactPage);
  }

  public openAbout() {
    this.navCtrl.push('AboutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
