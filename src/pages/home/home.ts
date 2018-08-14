import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public users = [
    { id: 1, username: 'Karl', password: '123' },
    { id: 2, username: 'Naio', password: '123' },
    { id: 3, username: 'Edio', password: '123' }
  ];
  username: string = '';
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  login(){
    let username = this.username;
    let found = this.users.some(function (arr) {
      return arr.username == username;
    });
    if(found){
      this.navCtrl.push(AboutPage);
    }
  }
}
