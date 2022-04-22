import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilBarbeiro } from './perfil-barbeiro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PerfilBarbeiroRoutingModule } from './perfil-barbeiro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PerfilBarbeiro }]),
    PerfilBarbeiroRoutingModule,
  ],
  declarations: [PerfilBarbeiro]
})
export class PerfilBarbeiroModule {}
