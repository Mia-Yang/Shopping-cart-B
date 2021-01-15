const { productSchemaModel } = require('../repository/cartRepository');

const getAllProducts = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.find((err, data) => {
      if (err) {
        reject(res.send('get products failed'));
      } else {
        resolve(res.send(data));
      }
    });
  });
};

const getProductById = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
        reject(res.send('get product failed'));
      } else {
        resolve(res.send(data));
      }
    });
  });
};

const addProduct = (req, res) => {
  const id = req.params.id;
  const product = req.body;

  return new Promise((resolve, reject) => {
    let newProduct = productSchemaModel({
      id: product.id,
      name: product.name,
      label: product.label,
      price: product.price,
      quantity: product.quantity,
      imgUrl: product.imgUrl,
    });
    newProduct.save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { getAllProducts, getProductById, addProduct };
