import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ActionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceId: number;

  @Column()
  action: number;

  @Column()
  light: number;

  @Column()
  create_at: Date;
}
