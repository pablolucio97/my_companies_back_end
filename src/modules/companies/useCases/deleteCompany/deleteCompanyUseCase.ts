import { AppError } from '@errors/appError';
import { CompaniesRepository } from '@modules/companies/repositories/implementations/companiesRepository';

import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: CompaniesRepository
    ) { }
    async execute(id: string) {
        const company = await this.companiesRepository.findById(id)
        if (!company) {
            throw new AppError(404, "Empresa não encontrada.")
        }
        await this.companiesRepository.deleteCompany(id)
    }
}