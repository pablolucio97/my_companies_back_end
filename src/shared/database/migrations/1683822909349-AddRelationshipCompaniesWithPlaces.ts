import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddRelationshipCompaniesWithPlaces1683822909349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('locais', new TableColumn({
            name: 'company_id',
            type: 'uuid',
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('locais', 'company_id')
    }
}
