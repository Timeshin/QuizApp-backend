import mongoose from "mongoose"

const User = mongoose.Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    role: { type: String, ref: "Role" }
})

export default mongoose.model("User", User)
