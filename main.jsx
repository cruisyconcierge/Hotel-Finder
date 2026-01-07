import React, { useState } from 'react';

// You can create all your components inside this one file for simplicity
function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My App</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Built Manually on GitHub
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a complete React application deployed via Vercel. 
          It uses Vite for building and Tailwind CSS for styling.
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition"
          >
            Count is {count}
          </button>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-50 border border-gray-200 transition">
            Learn React
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <FeatureCard 
            icon="🚀" 
            title="Fast Deployment" 
            description="Push to GitHub and Vercel handles the rest automatically." 
          />
          <FeatureCard 
            icon="⚛️" 
            title="React 18" 
            description="Using the latest features like Hooks and Strict Mode." 
          />
          <FeatureCard 
            icon="🎨" 
            title="Tailwind CSS" 
            description="Styled directly with utility classes. No extra CSS files needed." 
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 My React Project. Created with GitHub & Vercel.</p>
      </footer>
    </div>
  );
}

export default App;
