import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsuariosRepository } from './usuario.repository';
import { criaUsuarioDTO } from './dto/criaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/atualizaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export default class UsuarioController {
  constructor(private usuariosRepository: UsuariosRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    await this.usuariosRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, mensagem: 'usuário criado com sucesso' };
  }

  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.usuariosRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuariosRepository.atualiza(
      id,
      novosDados,
    );

    return {
      usuarioAtualizado,
      mensagem: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuariosRepository.remove(id);
    return {
      mensagem: 'Usuario removido com sucesso',
    };
  }
}
