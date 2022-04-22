import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilBarbeiro } from './perfil-barbeiro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilBarbeiro,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilBarbeiroRoutingModule {}
