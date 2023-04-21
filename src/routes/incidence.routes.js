import { Router } from "express"

import incidenceController from "../controllers/incidence.controller.js"

const router = Router()

const { getIncidences, postIncidence, getIncidenceByDPI, getIncidenceByID } = incidenceController

router.route("/")
    .get(getIncidences)

router.route("/:dpi")
    .get(getIncidenceByDPI)
    .post(postIncidence)

router.route("/:dpi/incidence/:id").get(getIncidenceByID)

export default router
