import { AppError } from '@errors/appError'
import { ICompanyRepository } from '@modules/companies/repositories/interfaces/company'
import { IUserRepository } from '@modules/users/repositories/interfaces/user'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListCompaniesByUserUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository,
        @inject('UsersRepository')
        private usersRepository: IUserRepository
    ) { }

    async execute(id: string) {

        const user = await this.usersRepository.findById(id)

        if (!user) {
            throw new AppError(404, 'Informe um usuário válido para listar empresas relacionadas.')
        }

        const companies = await this.companiesRepository.listCompanies(id)
        return companies
    }

}

export { ListCompaniesByUserUseCase }
