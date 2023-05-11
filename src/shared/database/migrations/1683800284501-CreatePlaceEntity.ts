import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlaceEntity1683800284501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'locais',
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
                    name: 'cep',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'rua',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'numero',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'bairro',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cidade',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'estado',
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
        await queryRunner.dropTable('locais')
    }

}
