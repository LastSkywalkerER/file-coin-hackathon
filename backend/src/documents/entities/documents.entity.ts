import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Users } from '@/users/entities/users.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  cid: string;

  @OneToOne(() => Users, (document) => document.address)
  @JoinColumn({
    name: 'owner',
    referencedColumnName: 'address',
  })
  @Column('text', { nullable: true })
  owner: string;
}
