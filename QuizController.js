import Quiz from "./Quiz.js"
import QuizService from "./QuizService.js"


class QuizController {
    async createQuiz(req, res) {
        try {
            const quiz = await QuizService.create(req.body, req.files.picture)
            res.json(quiz)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAllQuizzes(req, res) {
        try {
            const quizzes = await Quiz.find()
            return res.json(quizzes)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOneQuiz(req, res) {
        try {
            const quiz = await QuizService.getOneQuiz(req.query.id)
            return res.json(quiz)
        } catch (e) {
            res.status(500).json(e.message)
        }
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

    async deleteQuiz(req, res) {
        try {
            const quiz = await QuizService.deleteQuiz(req.query.id)
            return res.json(quiz)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new QuizController
