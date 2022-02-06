import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload";

const PORT = 8080;
const DB_URL = `mongodb+srv://admin:admin@cluster0.ctcbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))
app.use("/api", router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log("server was started " + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
