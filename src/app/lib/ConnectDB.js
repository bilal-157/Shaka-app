import mongoose from "mongoose"

const username = process.env.myusername
const password = process.env.mypassword

export const ConnectionString = `mongodb+srv://${username}:${password}@cluster0.uwt3w.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`