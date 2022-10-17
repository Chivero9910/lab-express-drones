const {default: mongoose} = require("mongoose")
const Drone = require("../models/Drone.model")

// CONECTAR CON LA BD
require("../db")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

// AGREGAR LA DATA A LA BD
Drone.insertMany(drones)
.then(() => {
    console.log("Todo dentro!")
})
.catch((err) => next(err))