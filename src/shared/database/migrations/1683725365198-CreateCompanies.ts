import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1683725365198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'empresas',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'website',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cnpj',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('empresas')
    }

}
