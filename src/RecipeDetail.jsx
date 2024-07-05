import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function RecipeDetail() {
  const [searchParams] = useSearchParams();
  const [recette, setRecette] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    const queryParams = JSON.parse(Object.fromEntries([...searchParams]).recipe);
    console.log(queryParams);

    if (queryParams) setRecette(queryParams);
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (recipe) => {
    if (!favorites.some(fav => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  if (!recette) {
    return <p>Recette non trouvée !</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <img className="w-full h-64 object-cover rounded" src={recette.image} alt={recette.name} />
        <h2 className="text-2xl font-bold mt-4">{recette.name}</h2>
        <p className="mt-2">Temps de préparation: {recette.preparation_time}</p>
        <p>Temps de repos: {recette.rest_time}</p>
        <p>Temps de cuisson: {recette.cooking_time}</p>
        <p>Difficulté: {recette.difficulty}</p>
        <p>Prix: {recette.price}</p>
        <h3 className="text-xl font-bold mt-4">Ingrédients</h3>
        <ul className="list-disc list-inside">
          {recette.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.number} {ingredient.name}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Instructions</h3>
        <ol className="list-decimal list-inside">
          {recette.instructions.map((instruction, index) => (
            <li key={index} className="mt-1">{instruction}</li>
          ))}
        </ol>
        <button
          onClick={() => handleAddToFavorites(recette)}
          className="bg-yellow-400 text-white p-2 mt-4 rounded-lg w-full"
        >
          Ajouter aux favoris
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
