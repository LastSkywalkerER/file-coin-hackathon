import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Users } from '@/users/entities/users.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  link: string;

  @ManyToOne(() => Users, (document) => document.address)
  @JoinColumn({
    name: 'owner',
    referencedColumnName: 'address',
  })
  @Column('text', { nullable: true, unique: false })
  owner: string;
}
