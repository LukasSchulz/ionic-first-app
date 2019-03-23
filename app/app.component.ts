import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import  firebase  from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';

firebase.initializeApp({
  apiKey: 'AIzaSyDNFW0LxMZeftMlZPxRpUpTZNqK12OmyQ8',
  authDomain: 'einkaufslistenapp.firebaseapp.com',
  databaseURL: 'https://einkaufslistenapp.firebaseio.com',
  projectid: 'einkaufslistenapp',
  storageBucket: 'einkaufslistenapp.appspot.com',
  messagingSenderId: '507987019255',
});



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any /**= TabsPage**/;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user){
        this.rootPage= "loginPage";
        unsubscribe();
      } else {
        this.rootPage = TabsPage;
        unsubscribe();
      }
    });
  }
}



