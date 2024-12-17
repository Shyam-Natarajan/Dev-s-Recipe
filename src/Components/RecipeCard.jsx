import { Heart, HeartPulse } from 'lucide-react';
import React, { useState,useContext } from 'react';
import { RecipeResultContext } from '../Context/RecipeContext';
import { useNavigate } from 'react-router-dom';


const getTwoValueFromArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return ["No Specific Diet"];
  }
  if (arr.length === 1) {
    return [arr[0]];
  }
  const firstIndex = Math.floor(Math.random() * arr.length);
  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * arr.length);
  } while (secondIndex === firstIndex);
  return [arr[firstIndex], arr[secondIndex]];
};

const RecipeCard = ({ results, bg, badge }) => {
  const [isFavourites, setIsFavourites] = useState(() =>
    JSON.parse(localStorage.getItem('favourites') || '[]').some(
      (fav) => fav.title === results.title
    )
  );

  const { setRecipeData } = useContext(RecipeResultContext);
  const navigate = useNavigate();

  if (!results || Object.keys(results).length === 0) {
    return (
      <p className="text-xl md:text-3xl lg:text-5xl font-semibold">
        No recipe data available
      </p>
    );
  }

  const addRecipeFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const isRecipeInFavourites = favourites.some(
      (fav) => fav.title === results.title
    );

    if (isRecipeInFavourites) {
      favourites = favourites.filter((fav) => fav.title !== results.title);
      setIsFavourites(false);
    } else {
      favourites.push(results);
      setIsFavourites(true);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
  };


  const healthLabels = getTwoValueFromArray(results.diets);

  const handleClick = (results) => {
    setRecipeData(results);
    navigate(`/recipedetails/${results.id}`);
  };

  return (
    <div onClick={() => handleClick(results)}
      className={`flex flex-col rounded-md ${bg} text-gray-800 dark:text-gray-300 overflow-hidden p-3 relative border z-10 w-full max-w-sm cursor-pointer`}
    >
      <div className="skeleton absolute inset-0" />
      <img
        src={results.image || '/2.jpg'}
        alt={`${results.title || 'Recipe'} image`}
        className="rounded-md w-full h-full object-cover opacity-0 transition-opacity duration-500"
        onLoad={(e) => {
          e.currentTarget.style.opacity = 1;
          if (e.currentTarget.previousElementSibling) {
            e.currentTarget.previousElementSibling.style.display = 'none';
          }
        }}
      />

      <div
        className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          addRecipeFavourites();
        }}
      >
        {!isFavourites ? (
          <Heart size={20} className="text-gray-800 dark:text-gray-300" />
        ) : (
          <Heart size={20} className="fill-red-500 text-red-500" />
        )}
      </div>

      <div className="flex flex-col mt-2">
        <p className="font-bold tracking-wide text-gray-800 dark:text-gray-300 line-clamp-2">
          {results.title || 'Unknown Recipe'}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {results.cuisines?.join(', ') || 'No specific cuisine'}
        </p>
      </div>

      <div className="flex gap-2 mt-auto flex-wrap">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 ${badge} p-1 rounded-md`}
          >
            <HeartPulse size={16} className="text-gray-800 dark:text-gray-300" />
            <span className="text-sm font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
