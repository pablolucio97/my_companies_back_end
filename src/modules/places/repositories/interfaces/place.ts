interface IPlace {
    id: string;
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    company_id?: string;
    created_at?: Date;
    updated_at?: Date;
}

interface ICreatePlaceDTO {
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    company_id?: string;
}

interface IUpdatePlaceDTO extends ICreatePlaceDTO {
    id: string;
}

interface IPlaceRepository {
    listPlaces(id: string, itemsPerPage: number, page: number): Promise<IPlace[]>
    createPlace(place: ICreatePlaceDTO): Promise<void>
    deletePlace(id: string): Promise<void>
    updatePlace(place: IUpdatePlaceDTO): Promise<void>
    findPlaceById(id: string): Promise<IPlace>
}

export { ICreatePlaceDTO, IPlace, IUpdatePlaceDTO, IPlaceRepository }