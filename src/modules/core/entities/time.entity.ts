import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne, Column } from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { TimeDetailEntity } from './time-detail.entity';

@Entity('time')
export class TimeEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => CatalogueEntity, {eager:true})
    @JoinColumn({name: 'catalogue_id'})
    year: CatalogueEntity;
    @Column({type: 'uuid', name: 'catalogue_id', comment: 'AÑo'})
    yearId: string;

    @ManyToOne(() => TimeDetailEntity, {eager:true})
    @JoinColumn({name: 'detail_id'})
    detail: TimeDetailEntity;
    @Column({type: 'uuid', name: 'detail_id', comment: 'Detalla'})
    detailId: string;
}