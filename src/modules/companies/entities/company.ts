import { Place } from '@modules/places/entities/place';
import { User } from '@modules/users/entities/user';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('empresas')
export class Company {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    website: string

    @Column()
    cnpj: string

    @Column()
    user_id: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @OneToMany(() => Place, place => place.company)
    places: Place[]

    @CreateDateColumn()
    created_at?: Date

    @CreateDateColumn()
    updated_at?: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}