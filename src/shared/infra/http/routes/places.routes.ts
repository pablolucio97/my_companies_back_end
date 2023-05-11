import { Router } from 'express'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'
import { CreatePlaceController } from '@modules/places/useCases/createPlaceUseCase/createPlaceController'
import { ListPlacesController } from '@modules/places/useCases/listPlacesUseCase/ListPlacesController'
import { DeletePlaceController } from '@modules/places/useCases/deleteCompanyUseCase/deletePlaceController'
import { UpdatePlaceController } from '@modules/places/useCases/updatePlaceUseCase/updatePlaceController'

const placesRoutes = Router()

const createPlaceController = new CreatePlaceController()
const listPlacesController = new ListPlacesController()
const deletePlaceController = new DeletePlaceController()
const updatePlaceController = new UpdatePlaceController()

placesRoutes.post('/create', ensureAuthenticate, createPlaceController.handle)
placesRoutes.get('/list-by-company/:id', ensureAuthenticate, listPlacesController.handle)
placesRoutes.delete('/delete/:id', ensureAuthenticate, deletePlaceController.handle)
placesRoutes.put('/update/:id', ensureAuthenticate, updatePlaceController.handle)

export { placesRoutes }