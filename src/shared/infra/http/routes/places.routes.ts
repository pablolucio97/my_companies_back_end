import { Router } from 'express'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'
import { CreatePlaceController } from '@modules/places/useCases/createPlaceUseCase/createPlaceController'
import { ListPlacesController } from '@modules/places/useCases/listPlacesUseCase/ListPlacesController'
import { DeletePlaceController } from '@modules/places/useCases/deleteCompanyUseCase/deletePlaceController'

const placesRoutes = Router()

const createPlaceController = new CreatePlaceController()
const listPlacesController = new ListPlacesController()
const deletePlaceController = new DeletePlaceController()

placesRoutes.post('/create', ensureAuthenticate, createPlaceController.handle)
placesRoutes.get('/list', ensureAuthenticate, listPlacesController.handle)
placesRoutes.delete('/delete/:id', ensureAuthenticate, deletePlaceController.handle)

export { placesRoutes }