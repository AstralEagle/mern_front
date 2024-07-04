import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from './img/image2.png'; // Import de l'image de fond

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

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search logic or redirect here
    console.log('Search for:', searchTerm);
  };

  const handleRecipeClick = (id) => {
    console.log(`Clicked Recipe ID: ${id}`);
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="w-1/2 h-screen bg-orange-50 pt-20 px-20">
        <div className="mb-8 text-center">
          <form onSubmit={handleSearchSubmit} className="flex justify-center">
            <input
              type="text"
              placeholder="Recherchez une recette..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 w-3/4 rounded-l-lg border-2 border-r-0 border-gray-300"
            />
            <button type="submit" className="bg-red-600 text-white p-2 rounded-r-lg border-2 border-red-600">
              Rechercher
            </button>
          </form>
          <div className="mt-4">
            <Link to="/favorites" className="text-blue-500 underline">Voir mes favoris</Link>
          </div>
        </div>
        <div className="flex flex-wrap">
          {recipes.map(recipe => (
            <div key={recipe.id} className="p-2 w-1/2" onClick={() => handleRecipeClick(recipe.id)}>
              <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-full cursor-pointer">
                <img className="w-40 h-40 object-cover flex-none" src={recipe.image} alt={recipe.name} />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-bold">{recipe.name}</h3>
                  <p>Temps de préparation: {recipe.preparation_time}</p>
                  <p>Difficulté: {recipe.difficulty}</p>
                  <p>Prix: {recipe.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
