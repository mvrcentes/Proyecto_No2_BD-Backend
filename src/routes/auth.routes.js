import { Router } from 'express'

const router = Router()

import { SignInManual, SignUppManual } from '../controllers/auth.controller.js'
// const { signUp, signIn, signOut, isActive } = auth



router.route('/signup')
    .post(SignUppManual)

router.route('/signin/')
    .post(SignInManual)

export default router
