import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  summe: number = 0.0;
  einkaufsliste: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      
  }

  addEinkauf(){
    let prompt = this.alertCtrl.create({
      title: "Einkauf hinzufügen",
      inputs: [{
        name: "titel",
        type: "text",
        placeholder: "Einkauf"
      },
      {
        name: "menge",
        type: "number",
        min: 1,
        placeholder: "Menge"
      },
      {
        name: "preis",
        type: "number",
        min: 0,
        placeholder: "Preis"
      }
      ],
      buttons:[{
        text: "Abbruch"
      },
      {
        text: "Hinzufügen",
        handler: data => {
          this.einkaufsliste.push(data);
          this.summeAktualisieren();
        }
      }
      ]
    });
    prompt.present();
  }

  deleteEinkauf(einkauf){
    let index = this.einkaufsliste.indexOf(einkauf);

    if(index > -1){
      this.einkaufsliste.splice(index, 1)
    }
    this.summeAktualisieren();
  }

  editEinkauf(einkauf){
    let index = this.einkaufsliste.indexOf(einkauf);

    let prompt = this.alertCtrl.create({
      title: "Einkauf bearbeiten",
      inputs: [{
        name: "titel",
        type: "text",
        placeholder: "Einkauf",
        value: this.einkaufsliste[index]["titel"]
      },
      {
        name: "menge",
        type: "number",
        min: 1,
        placeholder: "Menge",
        value: this.einkaufsliste[index]["menge"]
      },
      {
        name: "preis",
        type: "number",
        min: 0,
        placeholder: "Preis",
        value: this.einkaufsliste[index]["preis"]
      }
      ],
      buttons:[{
        text: "Abbruch"
      },
      {
        text: "Speichern",
        handler: data => {
          let index = this.einkaufsliste.indexOf(einkauf);

          if(index>-1){
            this.einkaufsliste[index] = data;
          }
          this.summeAktualisieren();
        }
      }
      ]
    });

    prompt.present();
  }


  summeAktualisieren(){
    this.summe = 0;
    for(let i=0; i<this.einkaufsliste.length; i++){
      this.summe = this.summe + this.einkaufsliste[i]["preis"]*this.einkaufsliste[i]["menge"];
      console.log(this.einkaufsliste[i]["preis"]);
      console.log(this.summe);
    }


  }


}
