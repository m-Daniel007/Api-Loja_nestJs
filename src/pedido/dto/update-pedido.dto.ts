import { PartialType } from '@nestjs/mapped-types';
import { CriaPedidoDTO } from './cria-pedido.dto';


export class UpdatePedidoDto extends PartialType(CriaPedidoDTO) {}
