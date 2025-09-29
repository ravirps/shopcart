# ShopCart - E-commerce Application

A modern e-commerce web application built with Next.js 14, TypeScript, and Tailwind CSS. This application fetches product data from the DummyJSON API and provides a complete shopping experience with cart functionality.

## Features

- 🏠 **Home Page**: Display products from DummyJSON API with search and filtering
- 📱 **Product Details**: Dynamic product pages with image galleries and detailed information
- 🛒 **Shopping Cart**: Add/remove items, update quantities, and persistent cart state
- 🎨 **Modern UI**: Responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🔒 **Type Safety**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API**: DummyJSON API
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravirps/shopcart.git
   cd shopcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Cart page
│   ├── products/[id]/     # Dynamic product detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   └── ProductCard.tsx    # Product card component
├── context/              # React Context providers
│   └── CartContext.tsx   # Cart state management
├── types/                # TypeScript type definitions
│   └── index.ts          # Product and CartItem interfaces
└── lib/                  # Utility functions
```

## Key Features Implementation

### 1. Product Listing
- Fetches products from `https://dummyjson.com/products`
- Displays products in a responsive grid
- Shows product image, title, price, rating, and discount
- Click to navigate to product details

### 2. Product Details
- Dynamic routes: `/products/[id]`
- Fetches individual product data from `https://dummyjson.com/products/{id}`
- Image gallery with thumbnail navigation
- Add to cart functionality
- Product specifications and description

### 3. Shopping Cart
- Add/remove products from cart
- Update item quantities
- Persistent cart state using localStorage
- Real-time cart count in header
- Order summary with totals

### 4. Navigation
- Responsive header with site branding
- Cart icon with item count badge
- Smooth navigation between pages

## API Integration

The application integrates with the DummyJSON API:

- **Products List**: `GET https://dummyjson.com/products`
- **Product Details**: `GET https://dummyjson.com/products/{id}`

## State Management

Cart state is managed using React Context API with the following features:

- **Add Item**: Adds new items or increments quantity
- **Remove Item**: Removes items from cart
- **Update Quantity**: Updates item quantities
- **Clear Cart**: Empties the entire cart
- **Persistence**: Cart state persists across browser sessions

## Styling

The application uses Tailwind CSS for styling with:

- Responsive design (mobile-first approach)
- Modern UI components
- Consistent color scheme
- Hover effects and transitions
- Loading states and error handling

## Trade-offs and Decisions

### 1. State Management
- **Chosen**: React Context API
- **Reason**: Simple state management for cart functionality without external dependencies
- **Trade-off**: Could use Zustand or Redux for more complex state management

### 2. Data Fetching
- **Chosen**: Client-side fetching with useEffect
- **Reason**: Simple implementation for demo purposes
- **Trade-off**: Could use SWR or React Query for better caching and error handling

### 3. Image Handling
- **Chosen**: Next.js Image component
- **Reason**: Built-in optimization and lazy loading
- **Trade-off**: Requires configuration for external domains

### 4. Styling
- **Chosen**: Tailwind CSS
- **Reason**: Rapid development and consistent design system
- **Trade-off**: Could use CSS modules or styled-components for more component-specific styling

## Known Limitations

1. **No Search/Filter**: Products are displayed without search or category filtering
2. **No User Authentication**: No user accounts or login functionality
3. **No Checkout Process**: Cart functionality without actual payment processing
4. **No Product Reviews**: No user reviews or ratings system
5. **Limited Error Handling**: Basic error handling for API failures
6. **No Offline Support**: Requires internet connection for product data

## Future Enhancements

- [ ] Search and filtering functionality
- [ ] User authentication and accounts
- [ ] Product reviews and ratings
- [ ] Checkout and payment integration
- [ ] Order history and tracking
- [ ] Wishlist functionality
- [ ] Product recommendations
- [ ] Mobile app (React Native)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for this application as it uses public APIs.

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue in the repository.