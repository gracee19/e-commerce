const router = require('express').Router();
const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData);
  }catch (err) {
    res.status(500).json(err);
  };
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try{

  }catch{}
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
