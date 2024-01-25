import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne, Column } from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { TimeDetailEntity } from './time-detail.entity';
import { UserEntity } from '@auth/entities';
import { TimeEntity } from './time.entity';

@Entity('lote')
export class LoteEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    number: number;

    @ManyToOne(() => TimeEntity, {eager:true})
    @JoinColumn({name: 'time_id'})
    time: TimeEntity;
    @Column({type: 'uuid', name: 'time_id', comment: 'time'})
    timeId: string;

    @ManyToOne(() => UserEntity, {eager:true})
    @JoinColumn({name: 'user_id'})
    user: UserEntity;
    @Column({type: 'uuid', name: 'user_id', comment: 'Usario '})
    userId: string;
}