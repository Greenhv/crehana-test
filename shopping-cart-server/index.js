module.exports = () => {
  const data = { products: [] };
  const faker = require('faker');

  for(let i = 0; i < 100; i++)
    data.products.push({
      id: `${i}`,
      product: faker.commerce.product(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      productImage: faker.image.food(),
      inventory: 10,
    });

  return data;
}