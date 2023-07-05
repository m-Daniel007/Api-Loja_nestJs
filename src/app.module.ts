import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuarios/usuario.module';


@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
