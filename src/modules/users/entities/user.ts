import { Company } from '@modules/companies/entities/company';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
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

    @OneToMany(() => Company, company => company.user)
    companies: Company[]

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}