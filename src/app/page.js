'use client';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-[var(--galaxy)] flex flex-col">
      
      {/* Header (original content) */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 sm:px-3 py-4 pt-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--planetary)] text-white font-extrabold grid place-items-center">X</div>
          <span className="font-extrabold tracking-wide text-[var(--galaxy)]">PLORE</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            radius="md"
            onClick={() => openModal('login')}
            className="text-sm border-[var(--planetary)] text-[var(--planetary)] cursor-pointer hover:bg-[var(--planetary)] hover:text-white px-3 py-1.5"
          >
            Login
          </Button>
          <Button
            onClick={() => openModal('signup')}
            radius="md"
            className="text-sm bg-[var(--planetary)] cursor-pointer hover:bg-[var(--galaxy)] text-white px-3 py-1.5"
          >
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero (original content) */}
      <main className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5 pt-24 md:pt-24 pb-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-5xl font-semibold text-[var(--galaxy)]">
          Your Campus, Unlocked.
        </h1>
        <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-[var(--planetary)]">
          Discover, Connect, and Thrive with Xplore – Your Gateway to Campus Clubs, Events, and Opportunities.
        </p>
        <div className="mt-8">
          <Button
            variant="primary"
            size="small"
            radius="md"
            onClick={() => openModal('login')}
            className="bg-[var(--galaxy)] hover:bg-[var(--planetary)] text-white px-6 py-2 text-xs md:text-sm"
          >
            LOGIN
          </Button>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-[var(--sky)] text-[var(--planetary)] px-3 py-1 text-xs">Events</span>
          <span className="rounded-full bg-[var(--sky)] text-[var(--planetary)] px-3 py-1 text-xs">Clubs</span>
          <span className="rounded-full bg-[var(--sky)] text-[var(--planetary)] px-3 py-1 text-xs">Opportunities</span>
        </div>
        </div>
      </main>

      {/* Why Xplore? (original 3 features) */}
      <section className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5 pb-10" id="features">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[var(--galaxy)]">Why Xplore?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4 text-[var(--galaxy)] text-xl">🎯</div>
            <h3 className="text-base font-semibold text-[var(--galaxy)]">Discover Events</h3>
            <p className="mt-2 text-[var(--planetary)] text-sm">Find and join exciting campus events, workshops, and activities that match your interests.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4 text-[var(--galaxy)] text-xl">🤝</div>
            <h3 className="text-base font-semibold text-[var(--galaxy)]">Connect with Clubs</h3>
            <p className="mt-2 text-[var(--planetary)] text-sm">Join clubs and societies that align with your passions and build lasting connections.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4 text-[var(--galaxy)] text-xl">📊</div>
            <h3 className="text-base font-semibold text-[var(--galaxy)]">Stay Organized</h3>
            <p className="mt-2 text-[var(--planetary)] text-sm">Track your participation, manage your schedule, and never miss important opportunities.</p>
          </div>
        </div>
      </section>

      {/* Success Stories (original) */}
      <section className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5 pb-10">
        <h3 className="text-center text-2xl font-semibold text-[var(--galaxy)]">Campus Success Stories</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[var(--planetary)] to-[var(--universe)] flex items-center justify-center text-white font-semibold">
                Success Story {i}
              </div>
              <p className="mt-3 text-[var(--planetary)] text-sm">Discover how students are making the most of their campus experience with Xplore.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (original content) */}
      <footer className="mt-auto bg-gradient-to-r from-[var(--galaxy)] to-[var(--planetary)] text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white text-[var(--planetary)] font-extrabold grid place-items-center">X</div>
                <span className="font-extrabold">PLORE</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">MENU</h4>
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li className="hover:text-white cursor-pointer">HOME</li>
                    <li className="hover:text-white cursor-pointer">ABOUT</li>
                    <li className="hover:text-white cursor-pointer">CONTACT US</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">INPUT AND FAQS</h4>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md w-full">
              <h4 className="font-semibold">DOWNLOAD OUR APPLICATION</h4>
              <p className="mt-1 text-white/80 text-sm">Get the Xplore mobile app for easy access to all campus activities on the go.</p>
              <div className="mt-4 flex gap-3">
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs px-4 py-2">APP STORE</Button>
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs px-4 py-2">PLAY STORE</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-6 text-sm text-white/70">All rights reserved</div>
        </div>
      </footer>

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
