import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock === 0;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <Link
        to={`/products/${product.id}`}
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-indigo-50"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm">
            {product.category}
          </span>
          {isOutOfStock && (
            <span className="rounded-full bg-rose-500/90 px-3 py-1 text-xs font-semibold text-white">Sold out</span>
          )}
        </div>
        <div className="absolute right-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-amber-500 shadow-sm">
          <svg className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          {product.rating}
        </div>

      </Link>

      <div className="flex flex-col gap-4 px-5 pb-6 pt-5">
        <div className="space-y-2">
          <Link to={`/products/${product.id}`} className="block text-lg font-semibold text-slate-900 transition-colors hover:text-indigo-600">
            <h3 className="line-clamp-2">{product.name}</h3>
          </Link>
          <p className="line-clamp-2 text-sm text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Starting from</p>
            <span className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            disabled={isOutOfStock}
            className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all ${
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
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>

        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {product.stock} in stock
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
