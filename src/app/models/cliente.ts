import { EnderecoDTO } from "./enderecoDTO";
import { Telefone } from "./telefone";
import { Email } from "./email";

export class Cliente{
    id: number;
    cpf: string;
    nome: string;
    endereco: EnderecoDTO;
    telefones: Telefone[];
    emails: Email[];
}