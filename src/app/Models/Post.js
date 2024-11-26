const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
})

const products = mongoose.models.products || mongoose.model("products" , postSchema)

export default products