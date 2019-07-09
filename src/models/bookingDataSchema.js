const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookingData= new Schema({
        dateToBook:{
            type:String
        },
        roomID :{
            type: Schema.Types.ObjectId,
            ref: "RoomDetails",
            required: true
        },
        reservations:[
            {
             slotNumber:{
                 type:Number
             },
             userName:{
                 type:String
             }
            }
        ]
});

module.exports = mongoose.model("BookingData", bookingData,"BookingData");
