import moongose from 'mongoose'
const orderSchema = moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, orderVehicle: [
        {
            Brand: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            vehicle: {
                type: moongose.Schema.Types.ObjectId,
                required: true,
                ref: 'Vehicle'
            }
        }
    ],
    clientDetails: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        drivingLicenseYears: {
            type: Number,
            required: true
        },
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        updateTime: { type: String },
        email_address: { type: String }
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    }
}, {
    timestamps: true
})


const Order = moongose.model('Order', orderSchema)

export default Order