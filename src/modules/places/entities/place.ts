import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('locais')
export class Place {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    cep: string

    @Column()
    rua: string

    @Column()
    numero: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    estado: string

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