import { ConsultaClienteComponent } from './cliente/consulta-cliente/consulta-cliente.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'consulta-cliente', component: ConsultaClienteComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
})
export class AppRoutingModule {}
