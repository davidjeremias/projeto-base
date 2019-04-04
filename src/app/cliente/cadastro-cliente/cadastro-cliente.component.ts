import { Globals } from './../../models/globals';
import { Endereco } from './../../models/endereco';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Telefone } from 'src/app/models/telefone';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;
  cliente = new Cliente();
  endereco = new Endereco();
  telefones: Telefone[] = new Array;
  emails: Email[] = new Array;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.criaFormulario();
  }

  criaFormulario(){
    this.formulario = this.fb.group({
      cpf: ['', Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      cep: ['', Validators.compose([Validators.required])],
      logradouro: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.required],
      cidade: ['', Validators.compose([Validators.required])],
      uf: ['', Validators.compose([Validators.required])],
      complemento: [''],
      numero: ['', Validators.compose([Validators.required])],
      tipoTelefone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
  }

  clean(){
    this.formulario.reset();
  }

  buscaEndereco(){}

}
