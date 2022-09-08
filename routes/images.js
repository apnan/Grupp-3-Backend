const express = require('express');
const router = express.Router();
const images = require('../models/Images');

/**
 * @openapi
 * /chooseACharacter:
 *   get:
 *     description: List of all characters!
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The character's name.
 *                 example: Pet
 *               image:
 *                 type: string
 *                 description: Url.
 *                 example: https://unsplash.com/photos/kopSFA_42_s
 *               descript:
 *                 type: string
 *                 description: Describes the character.
 *                 example: Lorem ..............
 *     responses:
 *       200:
 *
 */

router.get('/chooseACharacter', async (req, res) => {
  try {
    res.json(await images.find());
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/', async (req, res) => {
  console.log('Posted');
  const url = new images({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });
  try {
    const savedUrl = await url.save();
    res.json(savedUrl);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
