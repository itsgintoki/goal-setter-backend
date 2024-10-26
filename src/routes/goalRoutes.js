const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal } = require('../controllers/goalController')

const {protect} = require('../middlewares/authMiddlewares')

router.route('/',getGoals).get(protect,getGoals).post(protect,setGoal)
router.route('/:id',updateGoal).delete(protect,deleteGoal).put(protect,updateGoal)


module.exports = router