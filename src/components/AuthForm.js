'use client';
import { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

export default function AuthForm({ mode, onClose, onSwitchMode }) {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rollNumber: '',
    password: '',
    confirmPassword: '',
    clubName: '',
    rememberMe: false,
    agreeTerms: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { mode, userType, formData });
    // Handle authentication logic here
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication');
    // Handle Google auth
  };

  const handleTwitterAuth = () => {
    console.log('Twitter authentication');
    // Handle Twitter auth
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {mode === 'login' ? 'Welcome Back To Xplore!' : 'Create a profile'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {mode === 'signup' && (
            <p className="text-gray-600 text-sm mb-6">
              Create a free profile in less than 5 minutes.
            </p>
          )}

          {/* User Type Toggle (only for login) */}
          {mode === 'login' && (
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'student'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setUserType('clubAdmin')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'clubAdmin'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Club Admin
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Social Auth Buttons (only for signup) */}
            {mode === 'signup' && (
              <div className="space-y-3 mb-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleAuth}
                  className="w-full flex items-center justify-center space-x-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <span className="text-red-500">G</span>
                  <span>Sign up with Google</span>
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleTwitterAuth}
                  className="w-full flex items-center justify-center space-x-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <span className="text-blue-400">🐦</span>
                  <span>Sign up with Twitter</span>
                </Button>
                
                <div className="text-center text-gray-500 text-sm">or</div>
              </div>
            )}

            {/* Name fields (only for signup) */}
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name*
                  </label>
                  <InputField
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Frankie"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name*
                  </label>
                  <InputField
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Sullivan"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {mode === 'signup' ? 'Email*' : 'Email'}
              </label>
              <InputField
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={mode === 'signup' ? "hi@frankiesullivan.com" : "Enter your email"}
                required
              />
            </div>

            {/* Roll Number (for students) or Club Name (for club admins) */}
            {mode === 'login' && userType === 'student' && (
              <div>
                <InputField
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                  placeholder="Roll Number"
                  required
                />
              </div>
            )}

            {mode === 'signup' && userType === 'clubAdmin' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Club Name*
                </label>
                <InputField
                  type="text"
                  value={formData.clubName}
                  onChange={(e) => handleInputChange('clubName', e.target.value)}
                  placeholder="Enter your club name"
                  required
                />
              </div>
            )}

            {/* Password field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password{mode === 'signup' ? '*' : ''}
              </label>
              <InputField
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder={mode === 'signup' ? "Must be at least 8 characters" : "Password"}
                required
              />
            </div>

            {/* Confirm Password (only for signup) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password*
                </label>
                <InputField
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {/* Remember Me / Terms */}
            <div className="flex items-center justify-between">
              {mode === 'login' ? (
                <>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-purple-600 hover:text-purple-500"
                  >
                    Forgot Password?
                  </button>
                </>
              ) : (
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-0.5"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree with terms and conditions
                  </span>
                </label>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 py-3 mt-6"
            >
              {mode === 'login' ? 'Login' : 'Continue'}
            </Button>

            {/* Switch Mode */}
            <div className="text-center mt-4">
              <span className="text-gray-600 text-sm">
                {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              </span>
              <button
                type="button"
                onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
                className="ml-1 text-purple-600 hover:text-purple-500 text-sm font-medium"
              >
                {mode === 'login' ? 'Register' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}