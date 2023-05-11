import { AppError } from '@errors/appError';
import { CompaniesRepository } from '@modules/companies/repositories/implementations/companiesRepository';
import { IUpdateCompanyDTO } from '@modules/companies/repositories/interfaces/company';
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: CompaniesRepository
    ) { }
    async execute({ id, nome, cnpj, website }: IUpdateCompanyDTO) {
        const company = await this.companiesRepository.findById(id)
        if (!company) {
            throw new AppError(404, 'Essa empresa não existe.')
        }
        await this.companiesRepository.updateCompany({ id, nome, cnpj, website })
    }
}