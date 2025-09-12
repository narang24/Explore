'use client';
import { useState } from 'react';
import AuthForm from './components/AuthForm';
import Button from './components/Button';

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const openModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-purple-600 font-bold text-lg">X</span>
          </div>
          <span className="text-white font-bold text-xl">PLORE</span>
        </div>
        
        <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={() => openModal('login')}
            className="text-white border-white hover:bg-white hover:text-purple-600"
          >
            Login
          </Button>
          <Button
            variant="primary"
            onClick={() => openModal('signup')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 hover:from-yellow-300 hover:to-yellow-400"
          >
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
          Your Campus, Unlocked.
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover, Connect, and Thrive with Xplore – Your Gateway to Campus Clubs, Events, and Opportunities.
        </p>
        
        <Button
          variant="primary"
          size="large"
          onClick={() => openModal('login')}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 hover:from-yellow-300 hover:to-yellow-400 text-lg px-12 py-4"
        >
          LOGIN
        </Button>
      </main>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Why Xplore?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <span className="text-gray-800 text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Discover Events</h3>
              <p className="text-white/80">Find and join exciting campus events, workshops, and activities that match your interests.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <span className="text-gray-800 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect with Clubs</h3>
              <p className="text-white/80">Join clubs and societies that align with your passions and build lasting connections.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <span className="text-gray-800 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Stay Organized</h3>
              <p className="text-white/80">Track your participation, manage your schedule, and never miss important opportunities.</p>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Campus Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold">Success Story {i}</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Discover how students are making the most of their campus experience with Xplore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">X</span>
                </div>
                <span className="text-white font-bold text-xl">PLORE</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">MENU</h4>
                  <div className="space-y-1">
                    <p className="text-white/80 hover:text-white cursor-pointer">HOME</p>
                    <p className="text-white/80 hover:text-white cursor-pointer">ABOUT</p>
                    <p className="text-white/80 hover:text-white cursor-pointer">CONTACT US</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">INPUT AND FAQS</h4>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md">
              <h4 className="text-white font-semibold mb-2">DOWNLOAD OUR APPLICATION</h4>
              <p className="text-white/80 mb-4 text-sm">
                Get the Xplore mobile app for easy access to all campus activities on the go.
              </p>
              <div className="flex space-x-3">
                <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 text-sm px-4 py-2">
                  📱 APP STORE
                </Button>
                <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 text-sm px-4 py-2">
                  ▶️ PLAY STORE
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-6">
            <p className="text-white/60 text-sm">All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthForm
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={setAuthMode}
        />
      )}
    </div>
  );
}