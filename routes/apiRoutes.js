const db = require("../models");
const router = require("express").Router(); 


  router.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  router.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });



module.exports = router; 