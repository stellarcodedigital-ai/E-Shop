import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const shippingCost = getCartTotal() > 50 ? 0 : 5;
  const tax = getCartTotal() * 0.1;
  const total = getCartTotal() + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/70 shadow-xl shadow-indigo-100">
            <svg
              className="h-12 w-12 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17" />
              <circle cx="17" cy="19" r="1.8" />
              <circle cx="9" cy="19" r="1.8" />
            </svg>
          </div>
          <h2 className="mt-8 text-3xl font-bold text-slate-900">Your cart is feeling empty</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Discover new arrivals and exclusive collections to add to your cart. Your next favourite product is just a click away.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start shopping
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:text-slate-600"
            >
              Explore homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Shopping cart</h1>
            <p className="mt-2 text-slate-600">
              Review your items, adjust quantities, and get ready for a seamless checkout experience.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:text-slate-600"
          >
            Continue shopping
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/40 transition-shadow hover:shadow-xl sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="h-28 w-28 overflow-hidden rounded-2xl bg-slate-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">${item.price.toFixed(2)}</p>
                    <p className="mt-2 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-500">
                      {item.stock} in stock
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-end">
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
                    >
                      −
                    </button>
                    <span className="min-w-[3rem] text-center text-base font-semibold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      className="h-8 w-8 rounded-full bg-slate-900 text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-500">Subtotal</p>
                    <p className="text-xl font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 transition-colors hover:text-rose-600"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="m10 11 1 9m4-9-1 9" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax (10%)</span>
                  <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
