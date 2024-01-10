const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.send('this is the homepage');
    console.log(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
