const express = require('express');
const router =  express.Router();


const pageController = require('../controllers/pageController');
const searchController = require('../controllers/searchController');


//criando a rota da home
router.get('/',pageController.home)
router.get('/dogs',pageController.dogs)
router.get('/cats',pageController.cats)
router.get('/fishes',pageController.fishes)

router.get('/search',searchController.search)


// após precisa exportar

module.exports = router


