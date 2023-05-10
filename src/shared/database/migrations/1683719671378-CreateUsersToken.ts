import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersToken1683719671378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuariostokens',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "token",
                    type: "varchar",
                },
                {
                    name: "user_id",
                    type: "uuid",
                },
                {
                    name: "expires_date",
                    type: "timestamp",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
                {
                    name: 'FKUsuariosTokens',
                    referencedTableName: 'usuarios',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuariostokens')
    }

}
