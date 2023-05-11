import { AppError } from '@errors/appError';
import { PlacesRepository } from '@modules/places/repositories/implementations/placesRepository';
import { IUpdatePlaceDTO } from '@modules/places/repositories/interfaces/place';
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdatePlaceUseCase {
    constructor(
        @inject('PlacesRepository')
        private placesRepository: PlacesRepository
    ) { }
    async execute({
        id,
        nome,
        cep,
        numero,
        rua,
        bairro,
        cidade,
        estado
    }: IUpdatePlaceDTO) {
        const place = await this.placesRepository.findPlaceById(id)
        if (!place) {
            throw new AppError(404, 'Esse local não existe.')
        }
        await this.placesRepository.updatePlace({
            id,
            nome,
            cep,
            numero,
            rua,
            bairro,
            cidade,
            estado
        })
    }
}