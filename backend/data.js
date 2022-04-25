import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'laxmi',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'prasanna',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Airpods Wireless Bluetooth Headphones',
      slug: 'Airpods-Wireless',
      category: 'Electronics',
      image: '/images/airpods.jpg',
      price: 89.99,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 12,
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    },
    {
      // _id: '2',
      name: 'iPhone 11 Pro 256GB Memory',
      slug: 'iPhone-11-Pro-256GB-Memory',
      category: 'Electronics',
      image: '/images/phone.jpg',
      price: 599.99,
      countInStock: 7,
      brand: 'Apple',
      rating: 4.0,
      numReviews: 8,
      description:
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    },
    {
      // _id: '3',
      name: 'Cannon EOS 80D DSLR Camera',
      slug: 'Cannon-EOS-80D-DSLR-Camera',
      category: 'Electronics',
      image: '/images/camera.jpg',
      price: 929.99,
      countInStock: 5,
      brand: 'Cannon',
      rating: 3,
      numReviews: 12,
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    },
    {
      // _id: '4',
      name: 'Sony Playstation 4 Pro White Version',
      slug: 'Sony-Playstation-4-Pro-White-Version',
      category: 'Electronics',
      image: '/images/playstation.jpg',
      price: 399.99,
      countInStock: 11,
      brand: 'Sony',
      rating: 5,
      numReviews: 12,
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    },
    {
      // _id: '5',
      name: 'Logitech G-Series Gaming Mouse',
      slug: 'Logitech-G-Series-Gaming-Mouse',
      category: 'Electronics',
      image: '/images/mouse.jpg',
      price: 49.99,
      countInStock: 7,
      brand: 'Logitech',
      rating: 3.5,
      numReviews: 10,
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    },
    {
      // _id: '6',
      name: 'Amazon Echo Dot 3rd Generation',
      slug: 'Amazon-Echo-Dot-3rd-Generation',
      category: 'Electronics',
      image: '/images/alexa.jpg',
      price: 29.99,
      countInStock: 0,
      brand: 'Amazon',
      rating: 4,
      numReviews: 12,
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    },
  ],
};
export default data;
