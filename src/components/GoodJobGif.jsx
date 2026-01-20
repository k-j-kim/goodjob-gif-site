import { useState, useEffect } from 'react';
import { fetchGoodJobGif } from '../api/giphy';

const Spinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
  </div>
);

const GoodJobGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchGif = async () => {
    setLoading(true);
    const gifUrl = await fetchGoodJobGif();
    setGif(gifUrl);
    setLoading(false);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        🎉 Good Job! 🎉
      </h1>
      
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-6">
        {loading ? (
          <Spinner />
        ) : (
          <img 
            src={gif} 
            alt="Good Job GIF" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )}
      </div>

      <button
        onClick={fetchGif}
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {loading ? 'Loading...' : '🎲 Show Another!'}
      </button>

      <p className="text-center text-gray-600 mt-4 text-sm">
        Powered by Giphy API
      </p>
    </div>
  );
};

export default GoodJobGif;
