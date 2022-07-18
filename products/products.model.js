const products = [
  {
    productId: 'redshoe',
    title: 'Red Shoe',
    description: 'A wild red shoe',
    price: 55.55,
    reviews: [
      {
        rating: 5,
        description: 'I like those red shoes!!!',
      },
      {
        rating: 2,
        description: "I don't like these red shoes!!!",
      },
    ],
  },
  {
    productId: 'blackhat',
    title: 'Black Hat',
    description: 'A misteryous black hat',
    price: 117.5,
    reviews: [
      {
        rating: 5,
        description: 'I love this black hat!!!',
      },
    ],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

const getProductById = (productId) =>
  products.find((product) => product.id === productId);

const addNewProduct = (productId, title, description, price) => {
  const newProduct = {
    productId,
    title,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
};

const addProductReview = (productId, rating, description = null) => {
  const newReview = {
    rating,
    description,
  };

  const productWithId = products.find(
    (product) => product.productId === productId
  );

  if (productWithId) {
    productWithId.reviews.push(newReview);
    return newReview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addProductReview,
};
