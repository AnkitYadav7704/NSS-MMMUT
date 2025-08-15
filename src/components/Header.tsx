import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Moon, Sun, Menu, X, User, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="bg-red-600 dark:bg-red-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <Heart className="h-8 w-8" />
            <span>NSS MMMUT Blood Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-red-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-200 transition-colors">Contact</Link>
            {user?.isAdmin && (
              <Link to="/admin" className="hover:text-red-200 transition-colors">Admin</Link>
            )}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-700">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-red-200 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-red-200 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-red-200 transition-colors">Contact</Link>
              {user?.isAdmin && (
                <Link to="/admin" className="hover:text-red-200 transition-colors">Admin</Link>
              )}
              <div className="flex items-center justify-between pt-4 border-t border-red-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{isDark ? 'Light' : 'Dark'} Mode</span>
                </button>
                {user ? (
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;