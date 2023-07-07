import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto_imagens')
export class ProdutoImagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  descricao: string;
}
