interface ICompany {
    id: string;
    nome: string
    website: string
    cnpj: string
    created_at?: Date
    updated_at?: Date
}

interface ICreateCompanyDTO {
    nome: string
    website: string
    cnpj: string
}

interface IUpdateCompanyDTO {
    id: string;
    nome: string
    website: string
    cnpj: string
}


interface ICompanyRepository {
    listCompanies(): Promise<ICompany[]>
    createCompany(company: ICreateCompanyDTO): Promise<void>
    findByCNPJ(cnpj: string): Promise<ICompany>
    updateCompany(company: IUpdateCompanyDTO): Promise<void>
    deleteCompany(id: string): Promise<void>
}

export {
    ICompany,
    ICompanyRepository,
    IUpdateCompanyDTO,
    ICreateCompanyDTO
}
