import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  password: string = '';
  show: boolean = false;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  login(){

    for (let i = 0; i < this.users.length; i++) {
      let username = this.users[i].username;
      let password = this.users[i].password;
      if(this.username == username && this.password == password){
        // this.navCtrl.push(AboutPage);
        this.navCtrl.setRoot('MainPage');
      }else{
        this.show = true;
      }
    }

    // let username = this.username;
    // let checkusername = this.users.some(function (arr) {
    //   return arr.username == username;
    // });
    // if(checkusername){
    //   this.navCtrl.push(AboutPage);
    // }
  }
}
