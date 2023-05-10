import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('usuarios')
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}