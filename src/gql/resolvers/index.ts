import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { id: string }, context: any) => {
      const result = db.products.find((book) => book.id === args.id);
      return result;
    },
    categories: ()=> db.categories,
    category: (parent: any, args: {categoryID: string}, context: any)=> {
        const result = db.categories.find((catogory)=> catogory.id === args.categoryID);
        return result;
    }
  },
};