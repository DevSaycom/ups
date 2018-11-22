const express = require('express')
const router = express.Router()


const getAllArticlesController = require('../controller/articles_get_all')


router.get('/', getAllArticlesController.get_all)

module.exports = router