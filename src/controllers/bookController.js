import livro from "../models/book.js";

class BookController {

    static async listBooks(req, res) {
        const listBooks =  await livro.find({});
        res.status(200).json(listBooks);
    }

};

export default BookController;