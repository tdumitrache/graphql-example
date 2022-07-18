const productsModel = require('./products.model');

module.exports = {
  Query: {
    getProducts: () => {
      return productsModel.getAllProducts();
    },
    getProductsByPrice: (_, args) => {
      const { minPrice, maxPrice } = args;
      return productsModel.getProductsByPrice(minPrice, maxPrice);
    },
    getProductById: (_, args) => {
      const { productId } = args;
      return productsModel.getProductById(productId);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      const { productId, title, description, price } = args;
      return productsModel.addNewProduct(productId, title, description, price);
    },
    addProductReview: (_, args) => {
      const { productId, rating, description } = args;
      return productsModel.addProductReview(productId, rating, description);
    },
  },
};
