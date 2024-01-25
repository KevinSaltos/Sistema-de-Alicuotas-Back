import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { TimeEntity } from './time.entity';

@Entity('time-detail')
export class TimeDetailEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => CatalogueEntity, {eager:true})
    @JoinColumn({name: 'catalogue_id'})
    mounth: CatalogueEntity;
    @Column({type: 'uuid', name: 'catalogue_id', comment: 'Mes'})
    mounthId: string;
    
    @OneToMany(() => TimeEntity, time => time.year)
    time: TimeDetailEntity[];

    @Column()
    mount: number;

    @Column()
    code: string;

    @Column()
    pay: boolean;
}