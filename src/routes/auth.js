import { Router } from 'express'

const router = Router()

import auth from '../controllers/auth.controller.js'
const { signUp, signIn, signOut, isActive } = auth

router.route('/signup')
    .get(isActive)
    .post(signUp)

router.route('/in')
    .post(signIn)

export default router