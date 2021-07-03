import expressAsyncHandler from 'express-async-handler'
import Vehicle from '../DBModels/vehicleModel.js'


// @description Fetch all vehicles
// @route Fetch GET /api/vehicles
// @acess Public
const getVehicles = expressAsyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find({})
    res.json(vehicles)
})

// @description Fetch a single vehicle
// @route Fetch GET /api/vehicles/:id
// @acess Public
const getVehicleById = expressAsyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    if (vehicle) {
        res.json(vehicle)
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
})

export {
    getVehicles,
    getVehicleById
}