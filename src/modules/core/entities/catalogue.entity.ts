import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { TimeEntity } from './time.entity';
import { TimeDetailEntity } from './time-detail.entity';
import { UserEntity } from '@auth/entities';

@Entity('catalogues')
export class CatalogueEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    })
    deletedAt: Date;

 
    /** Inverse Relationship **/
    @OneToMany(() => CatalogueEntity, category => category.parent)
    children: CatalogueEntity[];

    /** Foreign Keys **/
    @ManyToOne(() => CatalogueEntity, category => category.children, {nullable: true})
    @JoinColumn({name: 'parent_id'})
    parent: CatalogueEntity;
    @Column({type: 'uuid', name: 'parent_id', nullable: true, comment: 'Padre, Madre'})
    parentId: string;

    @OneToMany(() => TimeEntity, time => time.year)
    time: TimeDetailEntity[];

    @OneToMany(() => TimeDetailEntity, detail => detail.mounth)
    detail: TimeDetailEntity[];

    @OneToMany(() => UserEntity, detail => detail.state)
    user: UserEntity[];

    /** Columns **/
    @Column({
        name: 'code',
        type: 'varchar',
        comment: 'Codigo del catalogo',
    })
    code: string;

    @Column({
        name: 'name',
        type: 'varchar',
        comment: 'Nombre del catalogo',
    })
    name: string;

    @Column({
        name: 'sort',
        type: 'int',
        comment: 'Orden',
    })
    sort: number;
}