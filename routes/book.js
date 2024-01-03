const express = require('express')
const router = express.Router()
const controller = require('../controller/book')

router.post('/', controller.create)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router
