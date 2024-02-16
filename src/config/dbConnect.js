import mongoose from "mongoose";

async function connectToDB() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.labfznk.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default connectToDB;