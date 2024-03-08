import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    name: String,
    team:[{
      ref:'users',
      type     : mongoose.Schema.Types.ObjectId
  }],
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projects", projectSchema);

export default projectModel;
