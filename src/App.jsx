import React from 'react';
import backgroundImage from './img/image.png';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate(); 

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-75 p-12 md:p-20 rounded-xl max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Rechercher votre recette ici</h1>
        <input
          type="text"
          placeholder="Tapez ici pour rechercher..."
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          onClick={handleSearch}
          className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default App;
