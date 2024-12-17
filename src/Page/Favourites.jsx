import React from 'react'
import Footer from '../Components/Footer'
import RecipeCard from "../Components/RecipeCard"
import { getRandomColor } from '../lib/utilis';

const Favourites = () => {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  return (
    <>
      <div className="bg-base-200 p-10 min-h-screen">
        <div className="max-w-screen-lg mx-auto">
          <p className=" font-bold text-3xl md:text-5xl my-4">My Favourites</p>

          {favourites.length === 0 && <p className="text-xl md:text-3xl my-2 ml-2">No favorites added yet!</p> }
          
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {favourites.map((recipe) => (
              <RecipeCard key={recipe.id} results={recipe} {...getRandomColor()} />
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>

  )
}

export default Favourites