import { Module } from '@nestjs/common';
import UsuarioController from './usuario.controller';
import { UsuariosRepository } from './usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuariosRepository,EmailEhUnicoValidator],
})
export class UsuarioModule {}
