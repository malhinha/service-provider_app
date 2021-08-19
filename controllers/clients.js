const Client = require('../models/client');
const router = require('express').Router();

/***** CREATE *****/

router.post('/', async(req, res) => {
  try {
    const createdClient = await Client.create(req.body);
    res.status(200).json(createdClient);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: INDEX *****/

router.get('/', async(req, res) => {
  try {
    const foundClients = await Client.find({});
    res.status(200).json(foundClients);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: SHOW *****/

router.get('/:id', async(req, res) => {
  try {
    const foundClient = await Client.findById(req.params.id);
    res.status(200).json(foundClient);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** UPDATE *****/

router.put('/:id', async(req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedClient)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** DELETE *****/

router.delete('/:id', async(req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedClient)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})



module.exports = router;
