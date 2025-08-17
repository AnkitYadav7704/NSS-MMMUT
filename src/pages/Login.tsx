import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Heart } from 'lucide-react';
import { useAuth } from '../contexts/Authsignup';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      navigate('/');
    } catch {
      setError('Google authentication failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 px-4">
  <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-md w-full space-y-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:scale-[1.01]">
    
    {/* Logo / Icon */}
    <div className="flex flex-col items-center">
      <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-red-500 to-red-600 dark:from-red-600 dark:to-red-400 mb-5 shadow-lg">
        <Heart className="h-8 w-8 text-white" />
      </div>
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
        Sign in
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Access NSS MMMUT Blood Bank portal
      </p>
    </div>

    {/* Form */}
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700 rounded-lg p-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="pl-10 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleChange}
            className="pl-10 pr-10 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Remember me + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center text-gray-600 dark:text-gray-400">
          <input
            type="checkbox"
            className="h-4 w-4 text-red-600 border-gray-300 rounded mr-2 focus:ring-red-500"
          />
          Remember me
        </label>
        <a href="#" className="font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition">
          Forgot password?
        </a>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleAuth}
        disabled={isLoading}
        className="w-full py-3 px-4 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-xl bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-sm transition"
      >
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
        Continue with Google
      </button>

      {/* Signup link */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Don’t have an account?{' '}
        <Link to="/signup" className="font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition">
          Sign up
        </Link>
      </p>

      {/* Demo credentials */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <p className="text-blue-700 dark:text-blue-300 text-sm font-semibold mb-1">Demo Credentials:</p>
        <p className="text-blue-600 dark:text-blue-400 text-sm">
          Email: <span className="font-mono">admin@nss.mmmut.ac.in</span><br />
          Password: <span className="font-mono">admin123</span>
        </p>
      </div>
    </form>
  </div>
</div>

  );
}

export default Login;
