import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'usuario_id', nullable: false })
  usuarioId: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  valor: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ length: 255, nullable: false })
  descricao: string;

  @Column({ nullable: false })
  categoria: string;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
//    caracteristicas: CaracteristicaProduto[];
//    imagens: ImagemProduto[];
