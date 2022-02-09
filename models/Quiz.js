import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean,
        required: true
    }
})

const TaskQuestion = new mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: [TaskSchema], required: true }
})

const Quiz = new mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    tasks: { type: [TaskQuestion], required: true },
    tags: [String],
})

export default mongoose.model("Quiz", Quiz)
