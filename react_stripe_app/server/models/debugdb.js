import mongoose from "mongoose";
const { Schema } = mongoose;

const debugSchema = new Schema({
    text: ({
        type: String,
        trim: true,
        required:true,
    }),

})

export default mongoose.model('Debug', debugSchema)
