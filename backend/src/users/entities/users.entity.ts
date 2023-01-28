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

  @OneToMany(() => Document, (document) => document.link)
  @JoinColumn({
    name: 'documents',
    referencedColumnName: 'link',
  })
  @Column('text', { array: true, default: [], nullable: false })
  documents: string[];
}
