import { User } from '@modules/users/entities/user';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn
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