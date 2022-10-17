const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((droneList) => {
    res.render("drones/list.hbs", {
      droneList
    })
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then((response) => {
    console.log("Drone añadido")
    res.redirect("/drones")
  })
  .catch((err) => next(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  Drone
  .findById(id)
  .then((editDrone)=>{
    res.render("drones/update-form.hbs",{
      editDrone
    })
    

  })
  .catch((err)=>{
    next(err)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
