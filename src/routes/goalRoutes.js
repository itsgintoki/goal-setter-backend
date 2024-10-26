const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal } = require('../controllers/goalController')

router.route('/',getGoals).get(getGoals).post(setGoal)
router.route('/:id',updateGoal).delete(deleteGoal).put(updateGoal)


module.exports = router