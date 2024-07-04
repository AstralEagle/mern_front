import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useRequestRecette from "./hook/useRequestRecette.jsx";

function RecipeDetail() {
  const { id } = useParams();

  const {recette, setSearchValue} = useRequestRecette()

  useEffect(() => {
    setSearchValue(id)
  }, [id]);

  if (!recette) {
    return <p>Recette non trouvée !</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <img className="w-full h-64 object-cover rounded" src={recette.image[0]} alt={recette.name} />
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
      </div>
    </div>
  );
}

export default RecipeDetail;
