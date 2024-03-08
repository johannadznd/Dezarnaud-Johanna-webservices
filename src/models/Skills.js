import mongoose from 'mongoose';
const { Schema } = mongoose;


const skillSchema = new Schema({
    name: {
        type: String,
        required: "un nom est obligatoire",
        unique: true,
      },
});

const skillModel = mongoose.model('skills',skillSchema)

export default skillModel