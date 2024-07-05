import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import backgroundImage from './img/image3.png'; // Import de l'image de fond

function RecipeDetail() {
  const [searchParams] = useSearchParams();
  const [recette, setRecette] = useState(null);


  useEffect(() => {
    const queryParams = JSON.parse(Object.fromEntries([...searchParams]).recipe);

    if (queryParams) setRecette(queryParams);
  }, [searchParams]);

  useEffect(() => {
    console.log(recette)
  }, [recette]);

  if (!recette) {
    return <p>Recette non trouvée !</p>;
  }

  return (
    <div className="min-h-screen bg-cover bg-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center min-h-screen py-20 ">
        <div className="bg-orange-50 p-8 rounded-lg shadow-lg max-w-lg">
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
              <li key={index}>{ingredient.number !== "0 " ? ingredient.number : ""} {ingredient.name}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-4">Instructions</h3>
          <ol className="list-decimal list-inside">
            {recette.instructions.map((instruction, index) => (
              <li key={index} className="mt-1">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
