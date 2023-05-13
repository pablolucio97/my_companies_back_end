interface ICompany {
    id: string;
    nome: string
    website: string
    cnpj: string
    user_id?: string
    created_at?: Date
    updated_at?: Date
}

interface ICreateCompanyDTO {
    nome: string
    website: string
    cnpj: string
    user_id?: string
}

interface IUpdateCompanyDTO extends ICreateCompanyDTO{
    id: string;
}


interface ICompanyRepository {
    listCompanies(id:string, itemsPerPage: number, page: number): Promise<ICompany[]>
    createCompany(company: ICreateCompanyDTO): Promise<void>
    findByCNPJ(cnpj: string): Promise<ICompany>
    findById(id: string): Promise<ICompany>
    updateCompany(company: IUpdateCompanyDTO): Promise<void>
    deleteCompany(id: string): Promise<void>
}

export {
    ICompany,
    ICompanyRepository,
    IUpdateCompanyDTO,
    ICreateCompanyDTO
}
