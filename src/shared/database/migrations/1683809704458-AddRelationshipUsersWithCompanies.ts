import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRelationshipUsersWithCompanies1683809704458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('empresas', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('empresas', 'user_id')
    }

}
