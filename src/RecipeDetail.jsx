import React from 'react';
import { useParams } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    name: "Tarte aux pommes à l'Alsacienne",
    preparation_time: "25 min",
    rest_time: "-",
    cooking_time: "30 min",
    difficulty: "très facile",
    price: "bon marché",
    image: "https://assets.afcdn.com/recipe/20230127/139908_w380h380c1cx1059cy707.webp",
    ingredients: [
      { name: "sucre en poudre", number: "100 g" },
      { name: "crème fraîche", number: "25 cl" },
      { name: "pâte brisée", number: "1" },
      { name: "pomme", number: "3" },
      { name: "oeuf", number: "2" },
      { name: "sucre vanillé", number: "1 sachet" }
    ],
    instructions: [
      "Pelez et coupez les pommes en fines tranches",
      "Dans un saladier, mélangez le sucre, les oeufs, le sucre vanillé",
      "Ajoutez la crème fraîche",
      "Etalez la pâte dans un moule à tarte et piquez le fond à l'aide d'une fourchette. Disposez les pommes sur la pâte et versez le tout sur les pommes (ou versez uniquement la crème)",
      "Puis disposer les lamelles de pommes roulées sur elles-mêmes en roses.",
      "Enfournez environ 30 minutes, jusqu'à ce que la tarte prenne une belle couleur dorée.",
      "Déguster"
    ]
  },
  {
    id: 2,
    name: "Salade Niçoise",
    preparation_time: "20 min",
    rest_time: "-",
    cooking_time: "-",
    difficulty: "facile",
    price: "bon marché",
    image: "https://assets.afcdn.com/recipe/20170607/20170607-164132_w1000h500c1cx1686cy2500.webp",
    ingredients: [
      { name: "thon", number: "200 g" },
      { name: "olives noires", number: "100 g" },
      { name: "tomates", number: "3" },
      { name: "oeufs", number: "2" },
      { name: "haricots verts", number: "150 g" },
      { name: "pommes de terre", number: "3" },
      { name: "huile d'olive", number: "3 c. à soupe" },
      { name: "vinaigre", number: "1 c. à soupe" }
    ],
    instructions: [
      "Faites cuire les pommes de terre et les haricots verts.",
      "Coupez les tomates et les pommes de terre en morceaux.",
      "Mélangez tous les ingrédients dans un saladier.",
      "Assaisonnez avec l'huile d'olive et le vinaigre.",
      "Servez frais."
    ]
  },
  {
    id: 3,
    name: "Ratatouille",
    preparation_time: "30 min",
    rest_time: "-",
    cooking_time: "1 h",
    difficulty: "moyenne",
    price: "bon marché",
    image: "https://assets.afcdn.com/recipe/20220706/128558_w420h344c1cx2838cy1868cxb5676cyb3780.webp",
    ingredients: [
      { name: "aubergines", number: "2" },
      { name: "courgettes", number: "2" },
      { name: "poivrons", number: "2" },
      { name: "tomates", number: "4" },
      { name: "oignon", number: "1" },
      { name: "ail", number: "2 gousses" },
      { name: "huile d'olive", number: "3 c. à soupe" },
      { name: "herbes de Provence", number: "1 c. à soupe" }
    ],
    instructions: [
      "Coupez les légumes en morceaux.",
      "Faites revenir l'oignon et l'ail dans l'huile d'olive.",
      "Ajoutez les légumes et les herbes de Provence.",
      "Laissez mijoter à feu doux pendant environ une heure.",
      "Servez chaud."
    ]
  },
  {
    id: 4,
    name: "Quiche Lorraine",
    preparation_time: "15 min",
    rest_time: "-",
    cooking_time: "30 min",
    difficulty: "facile",
    price: "bon marché",
    image: "https://assets.afcdn.com/recipe/20220127/128636_w420h344c1cx1896cy2844cxb3793cyb5688.webp",
    ingredients: [
      { name: "pâte brisée", number: "1" },
      { name: "lardons", number: "200 g" },
      { name: "crème fraîche", number: "20 cl" },
      { name: "lait", number: "20 cl" },
      { name: "oeufs", number: "3" },
      { name: "gruyère râpé", number: "100 g" },
      { name: "noix de muscade", number: "1 pincée" }
    ],
    instructions: [
      "Préchauffez le four à 180°C.",
      "Étalez la pâte dans un moule à tarte.",
      "Répartissez les lardons sur la pâte.",
      "Dans un saladier, mélangez les oeufs, la crème, le lait et la noix de muscade.",
      "Versez ce mélange sur les lardons.",
      "Parsemez de gruyère râpé.",
      "Enfournez pendant 30 minutes.",
      "Servez chaud."
    ]
  },
  {
    id: 5,
    name: "Crème Brûlée",
    preparation_time: "20 min",
    rest_time: "2 h",
    cooking_time: "1 h",
    difficulty: "difficile",
    price: "élevé",
    image: "https://assets.afcdn.com/recipe/20210419/119233_w420h344c1cx2400cy1533cxb4800cyb3066.webp",
    ingredients: [
      { name: "crème liquide", number: "50 cl" },
      { name: "lait", number: "25 cl" },
      { name: "jaunes d'oeufs", number: "6" },
      { name: "sucre", number: "100 g" },
      { name: "sucre roux", number: "50 g" },
      { name: "gousse de vanille", number: "1" }
    ],
    instructions: [
      "Préchauffez le four à 150°C.",
      "Faites chauffer la crème et le lait avec la gousse de vanille fendue et grattée.",
      "Blanchissez les jaunes d'oeufs avec le sucre.",
      "Versez le mélange crème-lait sur les oeufs en remuant.",
      "Répartissez dans des ramequins.",
      "Faites cuire au bain-marie pendant environ une heure.",
      "Laissez refroidir et réservez au frais pendant 2 heures.",
      "Avant de servir, saupoudrez de sucre roux et caramélisez avec un chalumeau."
    ]
  }
];

function RecipeDetail() {
  const { id } = useParams();
  console.log(`RecipeDetail ID: ${id}`);
  
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recette non trouvée !</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <img className="w-full h-64 object-cover rounded" src={recipe.image} alt={recipe.name} />
        <h2 className="text-2xl font-bold mt-4">{recipe.name}</h2>
        <p className="mt-2">Temps de préparation: {recipe.preparation_time}</p>
        <p>Temps de repos: {recipe.rest_time}</p>
        <p>Temps de cuisson: {recipe.cooking_time}</p>
        <p>Difficulté: {recipe.difficulty}</p>
        <p>Prix: {recipe.price}</p>
        <h3 className="text-xl font-bold mt-4">Ingrédients</h3>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.number} {ingredient.name}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Instructions</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mt-1">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
