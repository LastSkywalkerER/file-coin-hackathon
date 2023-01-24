import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Document } from '@/documents/entities/documents.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  address: string;

  @Column()
  role: string;

  @OneToMany(() => Document, (document) => document.cid)
  @JoinColumn({
    name: 'documents',
    referencedColumnName: 'cid',
  })
  @Column('text', { array: true, default: [], nullable: false })
  documents: string[];
}
