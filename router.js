import Router from "express"
import QuizController from "./QuizController.js"


const router = new Router()

router.post("/quizzes", QuizController.createQuiz)
router.get("/quizzes", QuizController.getAllQuizzes)
router.get("/quizzes/quiz", QuizController.getOneQuiz)
// router.put("/quizzes/:id", QuizController.update)
router.delete("/quizzes/quiz", QuizController.deleteQuiz)

export default router
