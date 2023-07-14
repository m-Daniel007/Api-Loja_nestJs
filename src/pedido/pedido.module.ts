import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PedidoEntity } from './pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from 'src/produto/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity, UsuarioEntity,ProdutoEntity])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
