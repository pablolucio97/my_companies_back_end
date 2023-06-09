import { getRepository, Repository } from 'typeorm'
import { Place } from '@modules/places/entities/place'
import {
    ICreatePlaceDTO,
    IPlace,
    IPlaceRepository,
    IUpdatePlaceDTO
} from '@modules/places/repositories/interfaces/place'

export class PlacesRepository implements IPlaceRepository {
    private repository: Repository<Place>
    public constructor() {
        this.repository = getRepository(Place)
    }
    async listPlaces(id: string, itemsPerPage: number, page: number): Promise<IPlace[]> {
        const places = await this.repository.find({
            where: {
                company_id: id
            },
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })
        return places
    }
    async createPlace(place: ICreatePlaceDTO): Promise<void> {
        const newPlace = this.repository.create(place)
        await this.repository.save(newPlace)
    }
    async deletePlace(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
    async updatePlace({
        id,
        bairro,
        cep,
        cidade,
        estado,
        nome,
        rua,
        numero
    }: IUpdatePlaceDTO): Promise<void> {
        await this.repository.update(id, {
            nome,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
        })
    }
    async findPlaceById(id: string): Promise<IPlace> {
        const place = await this.repository.findOne({ id })
        return place
    }
}