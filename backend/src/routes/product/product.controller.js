const Product = require("../../../db/models/product");

async function create(req, res) {
  // Crear un producto
  const { name, price, expired, category } = req.body;

  try {
    const findProduct = await Product.findOne({ where: { name } });
    console.log(findProduct);

    if (findProduct) {
      res.send("Este producto ya existe");
    } else {
      const product = await Product.create({
        name,
        price,
        expired,
        category,
      });
      res.send(product);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function view(req, res) {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    res.status(500);
  }
}

async function update(req, res) {
  const { id, name, price, expired, category } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (product == null) {
      return res.status(400).send("No se encontro el producto");
    } else {
      (product.name = name),
        (product.price = price),
        (product.expired = expired),
        (product.category = category),
        await product.save();
    }
    res.json({ message: "Product Updated" });
  } catch (error) {
    res.status(500);
  }
}

async function remove(req, res) {
  const { id } = req.body;

  try {
    const product = await Product.findByPk(id);
    console.log(product);

    if (product == null) {
      return res.status(400).send("No se encontro el producto");
    } else {
      await product.destroy();
      res.json({ message: "Product Deleted" });
    }
  } catch (error) {
    res.status(500);
  }
}

// Authorization: Bearer <token>

module.exports = { create, view, update, remove };
