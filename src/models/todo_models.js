const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("user",todoSchema);