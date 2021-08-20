const Job = require("../models/job")
const Client = require("../models/client")
const router = require('express').Router()

/***** CREATE *****/

router.post('/', async(req, res) => {
  try {
    const createdJob = await Job.create(req.body);
    // const updatedClient = Client.findByIdAndUpdate(req.body.client, {$addToSet: { jobs: createdJob._id }}, {new: true});
    res.status(200).json(createdJob);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: INDEX *****/

router.get('/', async(req, res) => {
  try {
    const foundJobs = await Job.find({});
    res.status(200).json(foundJobs);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** READ: SHOW *****/

router.get('/:id', async(req, res) => {
  try {
    const foundJob = await Job.findById(req.params.id);
    res.status(200).json(foundSJob);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** UPDATE *****/

router.put('/:id', async(req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedJob)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})


/***** DELETE *****/

router.delete('/:id', async(req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedJob)
  } catch (error) {
    console.error(error);
    res.status(400).json({message: error.message});
  }
})



module.exports = router;
