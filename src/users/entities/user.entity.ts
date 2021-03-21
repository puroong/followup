import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    constructor(email?: string, password?: string, nickname?: string) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    nickname: string;

    @Column({ type: 'date' })
    createdAt: Date

    @Column({ type: 'date' })
    updatedAt: Date
}
