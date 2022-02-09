import Router from "express"
import QuizController from "../controllers/QuizController.js"
import UserController from "../controllers/UserController.js"

const router = new Router()

router.post("/quizzes", QuizController.createQuiz)
router.get("/quizzes", QuizController.getAllQuizzes)
router.get("/quizzes/quiz", QuizController.getOneQuiz)
// router.put("/quizzes/:id", QuizController.update)
router.delete("/quizzes/quiz", QuizController.deleteQuiz)
router.post("/registration", UserController.registration)
router.post("/login", UserController.login)


export default router
