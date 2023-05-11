import { inject, injectable } from 'tsyringe'
import { ICreatePlaceDTO, IPlaceRepository } from '@modules/places/repositories/interfaces/place'
import { ICompanyRepository } from '@modules/companies/repositories/interfaces/company'
import { AppError } from '@errors/appError'

@injectable()
class CreatePlaceUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: IPlaceRepository,
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository
    ) { }
    async execute(place: ICreatePlaceDTO) {

        const validCompany = await this.companiesRepository.findById(place.company_id)

        if(!validCompany){
            throw new AppError(403, 'Informe o id de uma empresa válida.')
        }

        await this.placesRepository.createPlace(place)
    }
}

export { CreatePlaceUseCase }