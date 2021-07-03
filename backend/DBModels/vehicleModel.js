import moongose from 'mongoose'
const vehicleSchema = moongose.Schema({
    vehicleType: {
        type: String,
        required: true,
        default: 'Car'
    },
    transmission: {
        type: String,
        required: true,
        default: 'Automatic'
    },
    fuelPolicy: {
        type: String,
        required: true,
        default: 'Full To Full'
    },
    fuelType: {
        type: String,
        required: true,
        default: 'Diesel'
    },
    airCondition: {
        type: Boolean,
        required: true,
        default: true
    },
    doors: {
        type: Number,
        required: true,
        default: 2
    },
    fuelType: {
        type: String,
        required: true,
        default: 'Diesel'
    },
    image: {
        //FALTA POR
    }
}, {
    timestamps: true
})


const Vehicle = moongose.model('Vehicle', vehicleSchema)

export default Vehicle