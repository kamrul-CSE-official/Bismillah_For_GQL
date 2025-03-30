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
    categoryId: "cat1",
  },
  {
    id: "prod2",
    name: "iPhone 14 Pro",
    image: "https://source.unsplash.com/300x200/?smartphone",
    description: "Latest Apple smartphone with advanced camera system.",
    price: 1099.99,
    quantity: 20,
    onStock: true,
    categoryId: "cat2",
  },
  {
    id: "prod3",
    name: "Sony WH-1000XM4",
    image: "https://source.unsplash.com/300x200/?headphones",
    description: "Industry-leading noise canceling wireless headphones.",
    price: 349.99,
    quantity: 15,
    onStock: true,
    categoryId: "cat3",
  },
  {
    id: "prod4",
    name: "Canon EOS R5",
    image: "https://source.unsplash.com/300x200/?camera",
    description: "High-resolution mirrorless camera for professionals.",
    price: 3899.99,
    quantity: 5,
    onStock: true,
    categoryId: "cat4",
  },
  {
    id: "prod5",
    name: "Logitech MX Master 3",
    image: "https://source.unsplash.com/300x200/?mouse",
    description: "Advanced ergonomic wireless mouse for productivity.",
    price: 99.99,
    quantity: 30,
    onStock: true,
    categoryId: "cat5",
  },
];

const reviews = [
  {
    id: "rev1",
    review: "Amazing laptop with stunning performance!",
    rating: 4.8,
    date: "2024-03-30",
    productId: "prod1",
  },
  {
    id: "rev1",
    review: "Amazing laptop !",
    rating: 4.4,
    date: "2024-03-20",
    productId: "prod1",
  },
  {
    id: "rev2",
    review: "Great phone with a fantastic camera!",
    rating: 4.7,
    date: "2024-03-29",
    productId: "prod2",
  },
  {
    id: "rev3",
    review: "Best noise-canceling headphones I've ever used.",
    rating: 4.9,
    date: "2024-03-28",
    productId: "prod3",
  },
  {
    id: "rev4",
    review: "High-quality camera for professionals.",
    rating: 4.6,
    date: "2024-03-27",
    productId: "prod4",
  },
  {
    id: "rev5",
    review: "Super comfortable and efficient mouse!",
    rating: 4.5,
    date: "2024-03-26",
    productId: "prod5",
  },
];

export const db = {
  categories,
  products,
  reviews,
};
