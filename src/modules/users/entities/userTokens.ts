import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { User } from './user';

@Entity('usuariostokens')
export class UserTokens {
    @PrimaryColumn()
    id: string;

    @Column()
    token: string;

    @Column()
    user_id: string;

    @CreateDateColumn()
    expires_date: Date;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id', })
    user: User

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}