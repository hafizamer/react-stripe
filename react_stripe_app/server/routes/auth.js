import express from 'express'
import { register,login } from '../controllers/auth'
import {debug} from '../controllers/auth'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/debug", debug)

module.exports = router;