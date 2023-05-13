import { AppError } from '@errors/appError'
import { ICompanyRepository } from '@modules/companies/repositories/interfaces/company'
import { IPlaceRepository } from '@modules/places/repositories/interfaces/place'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListPlacesUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: IPlaceRepository,
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository
    ) { }

    async execute(id: string, itemsPerPage: number, page: number ) {

        const company = await this.companiesRepository.findById(id)

        if (!company) {
            throw new AppError(404, 'Informe uma empresa válida para listar locais pertencentes.')
        }

        const places = await this.placesRepository.listPlaces(id, itemsPerPage, page)
        return places
    }
}
