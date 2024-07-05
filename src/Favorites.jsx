import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from './img/image2.png';
import useRequestFavRecettes from "./hook/useRequestFavRecettes.jsx";

const Search = () => {
  const navigate = useNavigate();
  const [scrapSearchValue, setScrapSearchValue] = useState("");
  const { recettes, setSearchValue, removeFav } = useRequestFavRecettes();

  const handleSearchChange = (event) => {
    setScrapSearchValue(event.target.value);
  };

  const handleRecipeClick = (id, object) => {
    console.log(`Clicked Recipe ID: ${id}`);
    const objectData = JSON.stringify(object);
    navigate(`/recipe?${new URLSearchParams({ recipe: objectData }).toString()}`);
  };

  const handleSearchSubmit = (e) => {
    setSearchValue(scrapSearchValue);
    e.preventDefault();
  };

  const handleRemoveToFavorites = (id) => {
    removeFav(id)
  };

  return (
    <div className="min-h-screen bg-cover bg-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center min-h-screen py-20">
        <div className="w-9/12 bg-orange-50 pt-20 px-20">
          <div className="mb-8 text-center">
            <form onSubmit={handleSearchSubmit} className="flex justify-center">
              <input
                type="text"
                placeholder="Recherchez une recette..."
                value={scrapSearchValue}
                onChange={handleSearchChange}
                className="p-2 w-3/4 rounded-l-lg border-2 border-r-0 border-gray-300"
              />
              <button type="submit" className="bg-red-600 text-white p-2 rounded-r-lg border-2 border-red-600">
                Rechercher
              </button>
            </form>
            <div className="mt-4">
              <Link to="/search" className="text-blue-500 underline">Chercher des recettes</Link>
            </div>
          </div>
          <div className="flex flex-wrap">
            {recettes.map(recipe => (
              <div key={recipe.id} className="p-2 w-1/2">
                <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-full cursor-pointer" onClick={() => handleRecipeClick(recipe._id, recipe)}>
                  <img className="w-40 h-40 object-cover flex-none" src={recipe.image} alt={recipe.name} />
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-bold">{recipe.name}</h3>
                    <p>Temps de préparation: {recipe.preparation_time}</p>
                    <p>Difficulté: {recipe.difficulty}</p>
                    <p>Prix: {recipe.price}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleRemoveToFavorites(recipe._id); }}
                    className="bg-red-600 text-white p-2 m-2 rounded-lg"
                  >
                    Retirer des favoris
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
