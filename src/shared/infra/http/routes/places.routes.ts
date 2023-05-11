import { Router } from 'express'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'
import { CreatePlaceController } from '@modules/places/useCases/createPlaceUseCase/createPlaceController'
import { ListPlacesController } from '@modules/places/useCases/listPlacesUseCase/ListPlacesController'

const placesRoutes = Router()

const createPlaceController = new CreatePlaceController()
const listPlacesController = new ListPlacesController()

placesRoutes.post('/create', ensureAuthenticate, createPlaceController.handle)
placesRoutes.get('/list', ensureAuthenticate, listPlacesController.handle)

export { placesRoutes }