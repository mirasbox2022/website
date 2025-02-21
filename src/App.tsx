import React, { useEffect, useState } from 'react';
import { Skull, Sparkles, Binary, Shield, Terminal, Zap, Twitter, Send } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBuyClick = () => {
    window.location.href = 'https://your-buy-link.com'; // Замените на нужную ссылку
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-purple-900/30 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-8">
              <Skull className="w-16 h-16 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
              DEGRADATION AI
            </h1>
            <p className="text-2xl text-center text-gray-300 mb-8">
              $DGAI: Embrace the Digital Decay
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleBuyClick}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-full hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Buy $DGAI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">About DEGRADATION AI</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              DEGRADATION AI ($DGAI) represents the convergence of chaos and control in the digital realm. 
              We harness the power of entropy to create revolutionary AI systems that challenge traditional 
              paradigms, pushing the boundaries of what's possible in decentralized artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Binary className="w-8 h-8 text-red-500" />,
                title: "Entropy-Driven AI",
                description: "Harnessing chaos for unprecedented computational breakthroughs"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-500" />,
                title: "Cryptographic Decay",
                description: "Revolutionary security through controlled digital entropy"
              },
              {
                icon: <Terminal className="w-8 h-8 text-pink-500" />,
                title: "System Evolution",
                description: "Self-modifying protocols that adapt and grow stronger"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-red-900/30 transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black border border-red-700/30 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">Join The Decay</h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://twitter.com/dgaicoin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://t.me/dgaicoin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
