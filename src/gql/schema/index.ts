export const typeDefs = `#graphql
  type Product {
    id: ID! 
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    onStock: Boolean
    category: String
  }

  type Category {
    id: ID!
    name: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    categories: [Category]
    category(categoryID: ID!): Category
  }
`;