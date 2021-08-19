const Service = require("../models/service")
const router = require('express').Router()

/***** CREATE *****/

router.post('/', async(req, res) => {
  try {
    const createdService = await Service.create(req.body);
    res.status(200).json(createdService);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: INDEX *****/

router.get('/', async(req, res) => {
  try {
    const foundServices = await Service.find({});
    res.status(200).json(foundServices);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: SHOW *****/

router.get('/:id', async(req, res) => {
  try {
    const foundService = await Service.findById(req.params.id);
    res.status(200).json(foundService);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** UPDATE *****/

router.put('/:id', async(req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedService)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** DELETE *****/

router.delete('/:id', async(req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})



module.exports = router;
