const Book = require('../models/Book')
const errorHandler = require('../utils/errorHandler')

const create = async function(req, res) {
    try {
        const { title, author, year } = req.body
        const book = new Book({
            title,
            author,
            year
        })
        await book.save()

        res.status(201).json(book)
    } catch(e) {
        errorHandler(res, e)
    }
}

const remove = async function(req, res) {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)

        res.status(200).json(deletedBook)
    } catch(e) {
        errorHandler(res, e)
    }
}

const update = async function(req, res) {
    try {
        const { id } = req.params
        const { title, author, year } = req.body
        const updatedBook = await Book.findByIdAndUpdate(
            id, 
            { title, author, year }, 
            { new: true }
        )

        res.status(200).json(updatedBook)
    } catch(e) {
        errorHandler(res, e)
    }
}

const getAll = async function(req, res) {
    try {
        const books = await Book.find()

        res.json(books)
    
    } catch(e) {
        errorHandler(res, e)
    }
}

const getById = async function(req, res) {
    try {
        const { id } = req.params
        const book = await Book.findById(id)

        res.json(book)
    } catch(e) {
        errorHandler(res, e)
    }
}

module.exports = {
    create,
    remove,
    update,
    getAll,
    getById
}