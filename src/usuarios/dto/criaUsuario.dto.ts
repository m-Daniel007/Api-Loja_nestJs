import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class criaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é invalido' })
  @EmailEhUnico({ message: 'Já existe usuario com esse e-mail' })
  email: string;

  @MinLength(4, { message: 'A senha deve conter no minimo 4 caracteres' })
  senha: string;
}
