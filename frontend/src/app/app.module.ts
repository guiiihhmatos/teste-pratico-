import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioContainerComponent } from './pages/formulario-container/formulario-container.component';
import { ListaContainerComponent } from './pages/lista-container/lista-container.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarContainerComponent } from './pages/editar-container/editar-container.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormularioMovimentacaoComponent } from './pages/formulario-movimentacao/formulario-movimentacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioContainerComponent,
    ListaContainerComponent,
    EditarContainerComponent,
    FormularioMovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
