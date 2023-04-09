import { Router } from 'express'

import entitiesController from '../controllers/entities.controller.js'

const router = Router()

const { getEntities, createEntity, getEntity, updateEntity, deleteEntity } = entitiesController

router.route('/')
    .get(getEntities)
    .post(createEntity)

router.route('/:id')
    .get(getEntity)
    .put(updateEntity)
    .delete(deleteEntity)    

export default router