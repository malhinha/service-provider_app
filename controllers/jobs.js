const Job = require("../models/job")
const Client = require("../models/client")
const router = require('express').Router()

/***** CREATE Job and Update Client Jobs array *****/

// attempt 1:
// router.post('/', async(req, res, next) => {
//   try {
//     const createdJob = await Job.create(req.body);
//     res.status(200).json(createdJob);
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({message: error.message});
//   }
// })
//
// router.put('/', async (req, res) => {
//   try {
//     console.log('next action works');
//     res.send('next action good');
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({message: error.message});
//   }
// })

// attempt 2:
// router.post('/', async(req, res) => {
//   //store the query
//   const createdJobQuery = Job.create(req.body)
//   // actually run query
//   createdJobQuery.exec((err, createdJob) => {
//     if (err){
//       console.error(err);
//       res.status(400).json({ message: err.message });
//     } else {
//       const updateClientQuery = Client.findByIdAndUpdate(req.body.client, {$addToSet: { jobs: createdJob._id }}, { new: true })
//       // actually run it
//       updateClientQuery.exec((err, updatedClient) => {
//         if(err){
//           console.error(err);
//           res.status(400).json({ message: err.message })
//         } else {
//           res.status(200).json(createdJob)
//         }
//       })
//     }
//   })
// })


// attempt 3:
// router.post('/', async(req, res) => {
//   try {
//     const createdJob = await Job.create(req.body);
//     res.status(200).json(createdJob);
//   } then {
//     const updatedClient = Client.findByIdAndUpdate(req.body.client, {$addToSet: { jobs: createdJob._id }}, {new: true});
//     res.status(200).json(updatedClient)
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({message: error.message});
//   }
// })

// attempt 4:
router.post('/', async(req, res) => {
  try {
    const createdJob = await Job.create(req.body);
    const updatedClient = await Client.findByIdAndUpdate(req.body.client, {$addToSet: { jobs: createdJob._id }}, {new: true});
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
