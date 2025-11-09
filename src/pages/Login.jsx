import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        if (!formData.name) {
          setError('Name is required');
          return;
        }
        await signup(formData.name, formData.email, formData.password);
      }
      navigate('/');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-2xl shadow-indigo-100 sm:mt-12 sm:flex-row">
        <div className="relative hidden flex-1 flex-col justify-between bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 p-10 text-white sm:flex">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
              Premium experience
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight">Join a design-forward shopping community.</h2>
            <p className="mt-4 max-w-sm text-indigo-100">
              Discover curated collections, save your favourite items, and enjoy a personalised e-commerce experience tailored to your style.
            </p>
          </div>
          <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">Why choose E-Shop?</p>
            <ul className="mt-4 space-y-3 text-sm text-indigo-50">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs font-semibold">1</span>
                Free carbon-neutral shipping on orders over $50
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs font-semibold">2</span>
                Early access to limited releases and drops
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs font-semibold">3</span>
                Priority concierge support 24/7
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-6 py-12 sm:px-12">
          <div className="mx-auto w-full max-w-md">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h2>
              <span className="text-sm font-medium text-slate-400">
                {isLogin ? 'Access your personalised hub' : 'Start your curated journey'}
              </span>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm font-medium text-rose-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
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

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-inner shadow-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                {isLogin ? 'Sign in' : 'Create account'}
              </button>
            </form>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:text-slate-600"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center text-sm font-semibold text-slate-500 hover:text-slate-700"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
