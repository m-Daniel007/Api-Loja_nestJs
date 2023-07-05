import { Module } from '@nestjs/common';

import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';
import { UsuarioModule } from 'src/usuarios/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
