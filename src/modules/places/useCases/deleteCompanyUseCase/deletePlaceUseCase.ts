import { AppError } from '@errors/appError';
import { PlacesRepository } from '@modules/places/repositories/implementations/placesRepository';

import { inject, injectable } from 'tsyringe'

@injectable()
export class DeletePlaceUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: PlacesRepository
    ) { }
    async execute(id: string) {
        const place = await this.placesRepository.findPlaceById(id)
        if (!place) {
            throw new AppError(404, "Local não encontrado.")
        }
        await this.placesRepository.deletePlace(id)
    }
}