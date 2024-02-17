import express from "express";
import connectToDB from './config/dbConnect.js';
import livro from "../src/models/book.js";

const app = express();
app.use(express.json());

const conection = await connectToDB();

conection.on("error", (error) => {
    console.error("erro de conexão", error);
});

conection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).send(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).send(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].título = req.body.titulo;
    res.status(200).send(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso");
});

export default app