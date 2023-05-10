import { inject, injectable } from 'tsyringe'
import { ICompanyRepository, ICreateCompanyDTO } from '../../repositories/interfaces/company'
import { AppError } from '@errors/appError'

@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository
    ) { }

    async execute(company: ICreateCompanyDTO) {

        const alreadyRegisteredCompany = await this.companiesRepository.findByCNPJ(company.cnpj)

        if (alreadyRegisteredCompany) {
            throw new AppError(403, 'Já existe uma empresa registrada para o CNPJ informado.')
        }

        await this.companiesRepository.createCompany(company)
    }
}

export { CreateCompanyUseCase }