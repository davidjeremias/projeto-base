import { SelectItem } from 'primeng/components/common/selectitem';
import { Globals } from './../../models/globals';
import { EnderecoDTO } from '../../models/enderecoDTO';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Telefone } from 'src/app/models/telefone';
import { Email } from 'src/app/models/email';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;

  cliente = new Cliente();
  endereco = new EnderecoDTO();
  telefone = new Telefone();
  email = new Email();

  tipoTelefone: SelectItem[];
  selectedTipoTel: TipoTelefone;

  telefones: Telefone[] = new Array;
  emails: Email[] = new Array;

  habilitaUpdate: boolean = false;

  cols = [
    { field: 'numero', header: 'Nº do Telefone' },
    { field: 'tipoTelefone', header: 'Tipo Telefone' }
  ];

  constructor(private fb: FormBuilder, private viacep: NgxViacepService, private globals: Globals) { 
    this.tipoTelefone = [
      {label: 'Celular', value: {id: 1, tipoTelefone: 'Celular'} },
      {label: 'Residêncial', value: {id: 2, tipoTelefone: 'residencial'} },
      {label: 'Comercial', value: {id: 3, tipoTelefone: 'comercial'} }
    ];
  }

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
      tipoTelefone: ['', Validators.compose([Validators.required])]
    });
  }

  clean(){
    this.formulario.reset();
  }

  buscaEndereco(){
    this.viacep.buscarPorCep(this.endereco.cep).then( ( endereco: Endereco ) => {
      this.endereco.logradouro = endereco.logradouro;
      this.endereco.bairro = endereco.bairro;
      this.endereco.cidade = endereco.localidade;
      this.endereco.uf = endereco.uf;
      this.endereco.complemento = endereco.complemento;
      console.log(endereco);
     }).catch( (error: ErroCep) => {
      console.log(error.message);
     });
  }

  adicionaTelefone(){
    let telefoneTemp = new Telefone();
    telefoneTemp.numero = this.telefone.numero;
    telefoneTemp.tipoTelefone = this.selectedTipoTel.tipoTelefone;
    telefoneTemp.id = this.telefones.length;

    this.telefones.push(telefoneTemp);
    this.clean();

  }

  alteraTelefone(){}

  preparaUpdate(obj: Telefone){
    this.telefone.numero = obj.numero;
    this.selectedTipoTel.tipoTelefone = obj.tipoTelefone;
    this.habilitaUpdate = true;
  }

  removeTelefone(obj: Telefone){
    let idx = this.telefones.indexOf(obj);
    this.telefones.splice(idx, 1);
  }
}
