import mongoose from "mongoose"

const Quiz = new mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    tags: { type: String, required: true },
})

export default mongoose.model("Quiz", Quiz)
