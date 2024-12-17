import React, { useContext } from 'react';
import Footer from '../Components/Footer';
import { RecipeResultContext } from '../Context/RecipeContext';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {

  const { id } = useParams();
  const { recipeData } = useContext(RecipeResultContext);

  if (!recipeData || recipeData.id !== parseInt(id)) {
    return <p className='text-xl md:text-3xl lg:text-5xl font-semibold'>No recipe data available</p>;
  }

  const {
    image,
    title,
    cuisines = [],
    diets = [],
    readyInMinutes = "N/A",
    healthScore = "N/A",
    dishTypes = [],
    servings = "N/A",
    summary = "No summary available",
  } = recipeData;

   // Ensure cuisines and diets are arrays
   const cuisineLabels = cuisines.length ? cuisines : ["No specific cuisine"];
   const dietLabels = diets.length ? diets : ["No specific diet"];
   const dishLabels = dishTypes.length ? dishTypes : ["No specific dish type available"]

  return (
    <>
      <div className='bg-base-200 p-10 min-h-screen'>
        <div className="max-w-screen-lg mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='w-full'>
              <div className='skeleton absolute inset-0' />
              <img
                src={image || "/recipe.jpg"}
                alt={title || "Recipe image"}
                className='h-96 rounded-lg shadow-2xl object-cover opacity-0 transition-opacity duration-500 border-gray-500 border-2'
                onLoad={(e) => {
                  e.currentTarget.style.opacity = 1;
                  e.currentTarget.previousElementSibling.style.display = "none";
                }}
              />
            </div>
            <div className='w-full mt-5 md:m-0 ml-0 md:ml-5'>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold'>{ recipeData.title[0].charAt(0).toUpperCase() + recipeData.title.slice(1) }</h1>
              <div className='flex gap-2 mt-2 flex-wrap justify-center'>
                {cuisineLabels.map((label, index)=>(
                     <div key={`cuisine-${index}`} className=" p-2 rounded-md text-gray-800 dark:text-gray-300 bg-orange-500">
                    {label}
                  </div>
                ))}
                
                {dietLabels.map((label, index)=>(
                    <div key={`diet-${index}`}
                    className=" p-2 rounded-md text-gray-800 dark:text-gray-300 bg-green-500">
                    {label}
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                <div className='flex flex-col items-center pb-5 border-b-2 md:border-b-0 md:border-r-2'>
                  <h2 className='text-2xl font-semibold'>{readyInMinutes}</h2>
                  <p className='text-lg font-semibold text-center'>Cooking Time (Minutes)</p>
                </div>
                <div className='flex flex-col items-center pb-5 border-b-2 md:border-b-0 md:border-r-2'>
                  <h2 className='text-2xl font-semibold'>{healthScore || "N/A"}</h2>
                  <p className='text-lg font-semibold text-center'>Health Score</p>
                </div>
                <div className='flex flex-col items-center pb-5 border-b-2 md:border-b-0'>
                  <h2 className='text-2xl font-semibold'>{servings}</h2>
                  <p className='text-lg font-semibold text-center'>Servings</p>
                </div>
              </div>
              <div className='mt-10 flex gap-2 flex-wrap justify-center'>
              
              <h3 className='w-full text-center text-lg font-semibold'>Dish Types</h3>
              {dishLabels.map((label, index)=>(
                    <div key={`diet-${index}`}
                    className=" p-2 rounded-md text-gray-800 dark:text-gray-300 bg-amber-500">
                    {label}
                  </div>
                ))}
               
              </div>
              <div className='mt-5'>
                <h2 className='text-xl md:text-2xl'>Summary:</h2>
               {summary ? (
                  <div dangerouslySetInnerHTML={{ __html: recipeData.summary }} />
                ) : (
                  <p>No instructions available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetail;
