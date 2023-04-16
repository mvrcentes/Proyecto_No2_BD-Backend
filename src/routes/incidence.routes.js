import { Router } from "express"

import incidenceController from "../controllers/incidence.controller.js"

const router = Router()

const { getIncidences, getIncidenceByDPI, getIncidenceByID } = incidenceController

router.route("/").get(getIncidences)

router.route("/:dpi").get(getIncidenceByDPI)

router.route("/:dpi/incidence/:id").get(getIncidenceByID)

export default router
