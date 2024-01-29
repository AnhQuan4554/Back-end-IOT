import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataSensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temperature: number;

  @Column()
  humb: number;

  @Column()
  light: number;

  @Column()
  create_at: Date;
}
