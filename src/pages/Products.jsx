import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products
    .filter(product => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen">
      <section className="border-b border-white/60 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-500">Catalogue</p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Discover products tailored to you
                </h1>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  Quickly browse, filter, or search without losing sight of what matters most—the products themselves.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:w-64">
                  <svg
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21-4.35-4.35" />
                    <circle cx="11" cy="11" r="7" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                    className="w-full border-none bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sort</label>
                  <select
                    value={sortBy}
                    onChange={event => setSortBy(event.target.value)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                  >
                    <option value="name">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-white text-slate-600 shadow-sm hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/70 py-20 text-center shadow-inner">
            <svg
              className="h-16 w-16 text-slate-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 21H3v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="mt-6 text-xl font-semibold text-slate-900">No products found</p>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              Try adjusting your filters or searching for a different item to explore our catalogue.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
