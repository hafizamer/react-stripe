import express from 'express'
import { register } from '../controllers/auth'
import {debug} from '../controllers/auth'

const router = express.Router()

router.post("/register", register)
router.get("/debug", debug)

module.exports = router;