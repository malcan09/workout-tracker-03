const router = require("express").Router();
const db = require("../models");


router.post("/api/workouts", ({ body }, res) => {
    console.log("new workout", body)
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body.duration);
    db.Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
            
        },
        {
            new: true,
            upsert: true
        }
    ).then(updatedWorkout => {
        console.log(updatedWorkout);
        res.json(updatedWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    console.log('getting workout')
    db.Workout.find({})
        .then(dbWorkout => {
            console.log('database values', dbWorkout); 
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
