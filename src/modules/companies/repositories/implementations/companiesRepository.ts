import { getRepository, Repository } from 'typeorm'
import { Company } from '@modules/companies/entities/company'
import {
    ICompany,
    ICompanyRepository,
    ICreateCompanyDTO,
    IUpdateCompanyDTO
} from '../interfaces/company'

export class CompaniesRepository implements ICompanyRepository {
    private repository: Repository<Company>
    public constructor() {
        this.repository = getRepository(Company)
    }
    async listCompanies(id: string): Promise<ICompany[]> {
        const companies = await this.repository.find({
            where: {
                user_id: id
            },
            relations: ['user']
        })
        return companies
    }
    async createCompany(company: ICreateCompanyDTO): Promise<void> {
        const newCompany = this.repository.create(company)
        await this.repository.save(newCompany)
    }
    async findByCNPJ(cnpj: string): Promise<ICompany> {
        const company = await this.repository.findOne({ cnpj })
        return company
    }

    async findById(id: string): Promise<ICompany> {
        const company = await this.repository.findOne({ id })
        return company
    }

    async updateCompany({ id, nome, cnpj, website }: IUpdateCompanyDTO): Promise<void> {
        await this.repository.update(id, {
            nome,
            website,
            cnpj
        })
    }
    async deleteCompany(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
}