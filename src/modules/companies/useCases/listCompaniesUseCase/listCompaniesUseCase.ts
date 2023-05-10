import { ICompanyRepository } from '@modules/companies/repositories/interfaces/company'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListCompaniesUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository
    ) { }

    async execute() {
        const companies = await this.companiesRepository.listCompanies()
        return companies
    }

}

export { ListCompaniesUseCase }