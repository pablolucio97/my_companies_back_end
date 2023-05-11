import { inject, injectable } from 'tsyringe'
import { ICreatePlaceDTO, IPlaceRepository } from '@modules/places/repositories/interfaces/place'

@injectable()
class CreatePlaceUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: IPlaceRepository
    ) { }
    async execute(place: ICreatePlaceDTO) {
        await this.placesRepository.createPlace(place)
    }
}

export { CreatePlaceUseCase }