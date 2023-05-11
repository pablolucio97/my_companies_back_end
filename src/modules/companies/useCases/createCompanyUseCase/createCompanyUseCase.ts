import { inject, injectable } from 'tsyringe'
import { ICompanyRepository, ICreateCompanyDTO } from '../../repositories/interfaces/company'
import { AppError } from '@errors/appError'

@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository,
        @inject('UsersRepository')
        private usersRepository: ICompanyRepository
    ) { }

    async execute(company: ICreateCompanyDTO) {

        const alreadyRegisteredCompany = await this.companiesRepository.findByCNPJ(company.cnpj)

        const validUser = await this.usersRepository.findById(company.user_id)

        if (!validUser) {
            throw new AppError(403, 'Informe o id de um usuário existente.')
        }

        if (alreadyRegisteredCompany) {
            throw new AppError(403, 'Já existe uma empresa registrada para o CNPJ informado.')
        }

        await this.companiesRepository.createCompany(company)
    }
}

export { CreateCompanyUseCase }