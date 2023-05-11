import { IPlaceRepository } from '@modules/places/repositories/interfaces/place'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListPlacesUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: IPlaceRepository
    ) { }

    async execute() {
        const places = await this.placesRepository.listPlaces()
        return places
    }
}
