const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => res.send("Hospitales route"))

// router.route('/:id')
    // .get((req, res) => res.send("Hospitales route"))

module.exports = router