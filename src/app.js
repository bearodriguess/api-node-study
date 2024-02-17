import express from "express";
import connectToDB from './config/dbConnect.js';
import routes from "./routes/index.js";

const app = express();
routes(app);

const conection = await connectToDB();

conection.on("error", (error) => {
    console.error("Connection error", error);
});

conection.once("open", () => {
    console.log("Connection done.");
})

app.get("/books", async (req, res) => {
    const listBooks = await livro.find({});
    res.status(200).send(listBooks);
});

export default app