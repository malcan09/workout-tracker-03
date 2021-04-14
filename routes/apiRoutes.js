const db = require("../models");
const router = require("express").Router(); 


  router.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  router.put("/api/workouts/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });



module.exports = router; 