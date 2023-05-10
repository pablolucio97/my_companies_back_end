import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
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