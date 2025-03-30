const categories = [
  { id: "cat1", name: "Laptops" },
  { id: "cat2", name: "Smartphones" },
  { id: "cat3", name: "Headphones" },
  { id: "cat4", name: "Cameras" },
  { id: "cat5", name: "Accessories" },
];

const products = [
  {
    id: "prod1",
    name: "MacBook Pro 16",
    image: "https://source.unsplash.com/300x200/?laptop",
    description: "Powerful laptop with M2 chip and Retina display.",
    price: 2499.99,
    quantity: 10,
    onStock: true,
    category: "cat1",
  },
  {
    id: "prod2",
    name: "iPhone 14 Pro",
    image: "https://source.unsplash.com/300x200/?smartphone",
    description: "Latest Apple smartphone with advanced camera system.",
    price: 1099.99,
    quantity: 20,
    onStock: true,
    category: "cat2",
  },
  {
    id: "prod3",
    name: "Sony WH-1000XM4",
    image: "https://source.unsplash.com/300x200/?headphones",
    description: "Industry-leading noise canceling wireless headphones.",
    price: 349.99,
    quantity: 15,
    onStock: true,
    category: "cat3",
  },
  {
    id: "prod4",
    name: "Canon EOS R5",
    image: "https://source.unsplash.com/300x200/?camera",
    description: "High-resolution mirrorless camera for professionals.",
    price: 3899.99,
    quantity: 5,
    onStock: true,
    category: "cat4",
  },
  {
    id: "prod5",
    name: "Logitech MX Master 3",
    image: "https://source.unsplash.com/300x200/?mouse",
    description: "Advanced ergonomic wireless mouse for productivity.",
    price: 99.99,
    quantity: 30,
    onStock: true,
    category: "cat5",
  },
];

export const db = {
  categories,
  products,
};
