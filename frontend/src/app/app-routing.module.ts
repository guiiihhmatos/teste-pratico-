import { EditarContainerComponent } from './pages/editar-container/editar-container.component';
import { FormularioContainerComponent } from './pages/formulario-container/formulario-container.component';
import { ListaContainerComponent } from './pages/lista-container/lista-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista-containers', component: ListaContainerComponent
  },
  {
    path: 'formulario', component: FormularioContainerComponent
  },
  {
    path: 'lista-containers/editar', component: EditarContainerComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'formulario'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
