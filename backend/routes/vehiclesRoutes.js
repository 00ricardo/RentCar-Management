import express from 'express'
const router = express.Router()
import { getVehicles, getVehicleById } from '../controllers/vehiclesController'

router.route('/').get(getVehicles)
router.route('/:id').get(getVehicleById)


export default router