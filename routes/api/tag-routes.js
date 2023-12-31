const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Finds all Tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Finds a single tag by its 'id'
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      include: [{model: Product}]
    }); 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new tag
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates a tag by its 'id'
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then ((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

// Deletes a tag by its 'id'
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
