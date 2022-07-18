const orders = [
  {
    id: 1,
    date: '2005-05-05',
    subtotal: 173.2,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'These old red shoes were great...',
          title: 'Old red shoes',
          price: 55.55,
        },
        quantity: 7,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
