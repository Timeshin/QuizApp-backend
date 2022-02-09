import fileService from "./fileService.js"
import Quiz from "../models/Quiz.js"

class QuizService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdQuiz = await Quiz.create({...post, picture: fileName})
        return createdQuiz
    }

    async getAll() {
        const quizzes = await Quiz.find()
        return quizzes
    }

    async getOneQuiz(id) {
        if(!id) {
            throw new Error("id is empty")
        }
        const quiz = await Quiz.findById(id)
        return quiz
    }

    /*
        async update(req, res) {
            try {
                const quiz = req.body
                if(!quiz._id) {
                    res.status(400).json({ message: "Id is empty" })
                }
                const updatedQuiz = await Quiz.findByIdAndUpdate(quiz._id, quiz, { new: true })
                return res.json(updatedQuiz)
            } catch (e) {
                res.status(500).json(e)
            }
        }
    */

    async deleteQuiz(id) {
        if(!id) {
            throw new Error("id is empty")
        }
        const quiz = await Quiz.findByIdAndDelete(id)
        return quiz
    }
}

export default new QuizService()
