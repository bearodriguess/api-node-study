import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res) {
        const listBooks =  await book.find({});
        res.status(200).json(listBooks);
    }

    static async createBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Success.", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `Error on creating book: ${error.message }`});
        }
    }

};

export default BookController;