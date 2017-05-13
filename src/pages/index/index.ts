import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, NavOptions} from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'index-page',
  segment: 'index'
})
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  selectOptions: NavOptions = {updateUrl: false};

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openModal(){
    let modal = this.modalCtrl.create( IndexPage, {} );

    modal.present({updateUrl: false});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

}
