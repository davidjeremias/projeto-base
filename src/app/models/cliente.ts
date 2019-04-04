import { Endereco } from "./endereco";
import { Telefone } from "./telefone";
import { Email } from "./email";

export class Cliente{
    id: number;
    cpf: string;
    nome: string;
    endereco: Endereco;
    telefones: Telefone[];
    emails: Email[];
}