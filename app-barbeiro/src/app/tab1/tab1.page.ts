import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public barbeiros: any[];
  constructor(private navController: NavController) {
    this.barbeiros = [
      "Barbeiro 1",
      "Barbeiro 2",
      "Barbeiro 3",
      "Barbeiro 4"
    ]
  }

  public goToPerfil(){
    this.navController.navigateForward('tabs/perfil-barbeiro');
  }

}
