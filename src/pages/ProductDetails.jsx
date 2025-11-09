import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = useMemo(
    () => products.find(item => item.id === Number(productId)),
    [productId]
  );

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }
    return products
      .filter(item => item.category === product.category && item.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">Product unavailable</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">We couldn't find that product</h1>
        <p className="mt-3 max-w-xl text-sm text-slate-600">
          The item you're looking for may have been removed or is currently unavailable. Explore our latest arrivals instead.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Browse products
        </Link>
      </div>
    );
  }

  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-gradient-to-b from-white via-white to-indigo-50/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-slate-900">
            Products
          </Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {product.category}
              </p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{product.name}</h1>
              <p className="text-sm text-slate-600">{product.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-slate-200 bg-white/90 px-6 py-4 shadow-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Price</p>
                <p className="text-3xl font-semibold text-slate-900">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-600">
                  <svg className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  {product.rating}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Customer rating</span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Availability</p>
                <p className={`text-sm font-semibold ${isOutOfStock ? 'text-rose-500' : 'text-emerald-600'}`}>
                  {isOutOfStock ? 'Out of stock' : `${product.stock} in stock`}
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 px-6 py-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why you'll love it</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                <li>Thoughtfully designed in the {product.category.toLowerCase()} category for modern lifestyles.</li>
                <li>Crafted with durable materials to handle daily use without compromise.</li>
                <li>Backed by our 30-day returns and dedicated support team.</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  isOutOfStock
                    ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl'
                }`}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17" />
                  <circle cx="17" cy="19" r="1.8" />
                  <circle cx="9" cy="19" r="1.8" />
                </svg>
                {isOutOfStock ? 'Out of stock' : 'Add to cart'}
              </button>
              <p className="text-xs text-slate-500">
                Free shipping on orders over $75. Ships within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="border-t border-slate-200 bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">You might also like</h2>
              <Link to="/products" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                View all
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
