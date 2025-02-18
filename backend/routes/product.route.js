import express from "express";
import debugLib from "debug";

import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
const debug = debugLib("app:product");

// Middleware debugging
router.use((req, res, next) => {
  if (!req || !req.method || !req.url) {
    console.error("❌ Request object is undefined!");
  } else {
    debug(`Received ${req.method} request on ${req.url}`);
  }
  next();
});

// Middleware validasi ObjectId
// const validateObjectId = (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ success: false, message: "Invalid product ID" });
//   }
//   next();
// };

// Routes
router.get("/", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
