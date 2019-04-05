import { Globals } from './models/globals';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  {  FormsModule  }  from  '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ConsultaClienteComponent } from './cliente/consulta-cliente/consulta-cliente.component';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MessagesComponent,
    CadastroClienteComponent,
    ConsultaClienteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    NgxViacepModule,
    DropdownModule
  ],
  providers: [HttpClientModule, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
