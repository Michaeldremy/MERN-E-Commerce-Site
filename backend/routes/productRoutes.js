const router = require("express").Router();
const Product = require("../models/productModel");

// create product route
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      colors,
      size,
      imgUrl,
      category,
      stock,
      quantity,
      amount,
      createdAt,
    } = req.body;

    if (
      !title ||
      !description ||
      !price ||
      !colors ||
      !size ||
      !imgUrl ||
      !category ||
      !stock ||
      !quantity || 
      !amount
    ) {
      return res
        .status(400)
        .json("Please enter all product information to create product");
    }

    const existingTitle = await Product.findOne({ title: title });
    if (existingTitle) {
      return res
        .status(400)
        .json({ msg: "A product with that title already exists" });
    }

    const newProduct = new Product({
      title: title,
      description: description,
      price: price,
      colors: colors,
      size: size,
      imgUrl: imgUrl,
      category: category,
      stock: stock,
      quantity: quantity,
      amount: amount,
      createdAt: createdAt,
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// all products
router.get("/all-products", async (req, res) => {
  try {
    const allProducts = await Product.find({}).sort({ createdAt: "desc" });
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// one product
router.get("/product/:id", async (req, res) => {
  try {
    const oneProduct = await Product.findOne({ _id: req.params.id });
    res.json(oneProduct);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// update product
router.put("/product/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// delete product
router.delete("/product/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.deleteOne({ _id: req.params.id });
    res.json(deleteProduct);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
