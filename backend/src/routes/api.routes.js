import express from 'express'
import productController from '../controllers/product.controller.js'

const router = express.Router()

router.get("/products", productController.findAll)
router.post("/products", productController.create)
router.delete("/products/:id", productController.deleteByPk)

export default router
