import { Component } from '@angular/core';
import {ItemSliding, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  deleteItem(item: ItemSliding) {
    console.log("DELTED");
    const nativeElement = <HTMLElement> item.item.getNativeElement();
    const moveFactor = item.getOpenAmount() > 0 ? -1 : 2.5;
    const x = nativeElement.offsetWidth * moveFactor;
    item.setElementClass("removed", true);
    item.moveSliding(x);
  }

}
