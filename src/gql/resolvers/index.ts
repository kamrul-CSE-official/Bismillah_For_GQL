import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, { id }, context: any) => {
      const result = db.products.find((book) => book.id === id);
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, { categoryID }, context: any) => {
      const result = db.categories.find(
        (catogory) => catogory.id === categoryID
      );
      return result;
    },
  },
  Product: {
    category: ({ categoryId }, args: any, context: any) => {
      return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }, args: any, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }, args: any, context: any) => {
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
