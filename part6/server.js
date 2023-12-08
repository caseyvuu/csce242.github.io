//npm i express, npm i joi, npm i multer, npm i cors, npm i mongoose
const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const upload = multer({ dest: __dirname + "/public/images" });
const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://cv10:Mongoose123@cluster0.yeez4jc.mongodb.net/")
    .then(() => {
    console.log("connected to mongodb");
    })
    .catch((error) => console.log("couldn't connect to mongodb", error));

    app.get("/", (req, res) => {
    res.sendFile(__dirname + "/review.html");
});

const reviewSchema = new mongoose.Schema({
    message: String,
    name: String,
});

const Review = mongoose.model("Review", reviewSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/reviews", (req, res) => {
    getReviews(res);
});

const getReviews = async (res) => {
    const reviews = await Review.find();
    res.send(reviews);
};

app.get("/api/reviews/:id", (req, res) => {
    getReview(res, req.params.id);
});

const getReview = async(res, id) => {
    const review = await Review.findOne({_id:id});
    res.send(review);
};

app.post("/api/reviews", upload.single("img"), (req, res) => {

    const result = validateReview(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const review = new Review({
        message: req.body.message,
        name: req.body.name,
    })
    
    createReview(res, review);
});

const createReview = async (res, review) => {
    const result = await review.save();
    res.send(review);
};

app.put("/api/reviews/:id", (req, res) => {
    const result = validateReview(req.body);
    console.log(result);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateReview(req, res);
});

const updateReview = async (req, res) => {
    let fieldsToUpdate = {
        message: req.body.message,
        name: req.body.name,
    }

    const result = await Review.updateOne({_id:req.params.id}, fieldsToUpdate);
    const review = await Review.findById(req.params.id);

    res.send(review);
};

app.delete("/api/reviews/:id", (req, res) => {
    removeReviews(res, req.params.id);
});

const removeReviews = async(res, id) => {
    const review = await Review.findByIdAndDelete(id);
    res.send(review);
};

const validateReview = (review) => {
    console.log(review);
    const schema = Joi.object({
        _id: Joi.optional(),
        message: Joi.string().required(),
        name: Joi.string().required(),
    });

    return schema.validate(review);
};

app.listen(3001, () => {
    console.log("I'm listening");
});