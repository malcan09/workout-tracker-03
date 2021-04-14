const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            required: "Please enter exercise type"
        },
        name: {
            type: String,
            required: "Please enter exercise name"
        },
        duration: {
            type: Number,
            required: "Please enter exercise time in minutes"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;