import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-inner">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 13 4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-8 text-3xl font-bold text-slate-900">Order confirmed</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Thank you for your purchase! We are preparing your order and will send a confirmation email shortly. Sit back while your essentials are on their way.
          </p>
          <p className="mt-6 text-sm font-medium text-slate-400">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
            <p className="max-w-2xl text-slate-600">
              Complete your details to finalise your purchase. We use secure payment providers and encrypted processing for peace of mind.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200/70 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-700">
            <p>Secure payment powered by Stripe & PayPal</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Shipping information</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="address">
                    Street address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="zipCode">
                    ZIP / Postal code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="country">
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Payment details</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="cardNumber">
                    Card number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="expiryDate">
                    Expiry date
                  </label>
                  <input
                    id="expiryDate"
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required
                  />
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
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
              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                Place secure order
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg shadow-slate-200/50">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Need assistance?</h3>
              <p className="mt-3 text-sm text-slate-600">
                Our concierge team is available 24/7 to answer any questions about your order or delivery.
              </p>
              <a
                href="mailto:support@eshop.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                support@eshop.com
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </a>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
