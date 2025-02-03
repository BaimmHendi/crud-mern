import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

import {createProduct, getProduct} from "../controllers/product.controller.js";

const router = express.Router();

export default router();

router.get("/", getProduct);

router.post("/", createProduct);

router.put("/:id", async (req,res) => {
  const {id} = req.params;

  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ success: false, message: "Invalid product id"})
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
    res.status(200).json({ success: true, data: updateProduct});
  } catch (error) {
    res,status(500).json({ success: false, message: "Server error!"});
  }
})

router.delete("/:id", async (req,res) => {
  const {id} = req.params;
  
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in delete product:", error.message);
    res.status(400).json({ success: false, message: "Product not found" });
  }
})