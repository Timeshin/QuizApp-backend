import mongoose from "mongoose"

const Role = mongoose.Schema({
    value: { type: String, default: "user" },
})

export default mongoose.model("Role", Role)
