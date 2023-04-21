import { Router } from "express";

const router = Router();

import diseasesController from "../controllers/diseases.controller.js";
const { getDiseases } = diseasesController;

router.route("/")
    .get(getDiseases)


export default router