
const express = require("express");
const { getProblems, getProblemById } = require("../controllers/problem");
const { postAdmin, addProblem } = require("../controllers/admin");

const router = express.Router();

//routes

//get all problems
router.get("/problems", getProblems);
router.get("/problems/:id", getProblemById);

router.post('/admin/login', postAdmin);

router.post('/admin/add', addProblem)


module.exports = router;