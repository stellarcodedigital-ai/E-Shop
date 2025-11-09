import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/80 via-white to-sky-100/70" />
        <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-sky-400/40 blur-3xl sm:h-[420px] sm:w-[420px]" />
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-4 pb-20 sm:px-6 lg:flex-row lg:items-start lg:px-8">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Elevate your shopping experience
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Discover curated essentials for every lifestyle
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 lg:mx-0">
              Shop the latest drops from premium brands, enjoy fast delivery, and experience personalised recommendations crafted for you.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Shop the collection
              </Link>
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-600 sm:w-auto"
              >
                Browse categories
              </Link>
            </div>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-lg">
                <dt className="text-sm font-medium text-slate-500">Trusted customers</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">120k+</dd>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-lg">
                <dt className="text-sm font-medium text-slate-500">Product curation</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">2k+ items</dd>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-lg">
                <dt className="text-sm font-medium text-slate-500">Free delivery</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">48h*</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-10 left-10 hidden h-32 w-32 rounded-full bg-indigo-200/60 blur-3xl lg:block" />
            <div className="absolute bottom-12 right-8 hidden h-32 w-32 rounded-full bg-sky-200/70 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/80 shadow-2xl shadow-indigo-100">
              <img
                src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=80"
                alt="Modern ecommerce hero"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured arrivals</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Hand-picked favourites from our community. Updated daily to keep your wardrobe and home looking fresh.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-700"
          >
            View all products
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white/80 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-indigo-50 p-8 shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17" />
                  <circle cx="17" cy="19" r="1.8" />
                  <circle cx="9" cy="19" r="1.8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Free express delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Enjoy fast, tracked delivery on every order over $50 with carbon neutral shipping partners.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-8 shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Quality guaranteed</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Only the highest quality brands, backed by our 30-day hassle free returns and customer-first support.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-8 shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 9h14l-1.3 11.05A2 2 0 0 1 15.71 22H8.29a2 2 0 0 1-1.99-1.95L5 9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Seamless checkout</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Save your favourite addresses and payment methods to breeze through checkout in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
