import { Search } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard';
import { getRandomColor } from '../lib/utilis';
import { RecipeResultContext } from '../Context/RecipeContext';


const apiKey = import.meta.env.VITE_APP_KEY;

const MainRecipePage = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enteredResult, setEnteredResult] = useState('');
  const { searchQuery, selectedFilters } = useContext(RecipeResultContext);
  const [error, setError] = useState(null);

  // Verbose logging for filters
  useEffect(() => {
    console.log("🔍 MAIN PAGE FILTERS:");
    console.log("Search Query:", searchQuery);
    console.log("Selected Filters:", JSON.stringify(selectedFilters, null, 2));
  }, [searchQuery, selectedFilters]);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setRecipe([]);
      setError(null);

      try {
        const resultFilter = selectedFilters.length > 0
          ? `tags=${selectedFilters.map(encodeURIComponent).join(',')}`
          : '';

        const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery||"chicken"}&apiKey=${apiKey}&number=10&addRecipeInformation=true&sort=random`;

        const fullAPIPath = resultFilter
          ? `${baseURL}&${resultFilter}`
          : baseURL;

        console.log("Full API Path:", fullAPIPath);

        const searchResponse = await axios.get(fullAPIPath);
        const searchdata = searchResponse.data;
        const data = searchdata.results || [];

        setRecipe(data);
        console.log("Fetched Recipes:", data);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if there's a search query or filters
    if (searchQuery || selectedFilters.length > 0) {
      fetchRecipe();
    }
  }, [searchQuery, selectedFilters]);

  const fetchRecipe = async (enteredResult) => {
    setLoading(true);
    setRecipe([]);
    setError(null);

    try {
      const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=${enteredResult}&apiKey=${apiKey}&number=10&addRecipeInformation=true&sort=random`;

      console.log("On Search Result:", baseURL);

      const searchResponse = await axios.get(baseURL);
      const searchdata = searchResponse.data;
      const data = searchdata.results || [];

      setRecipe(data);
      console.log("Fetched Recipes:", data);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (enteredResult.trim()) {
      fetchRecipe(enteredResult);
    }
    setEnteredResult("");
  };


  return (
    <div className="bg-base-200 p-10 flex-1 w-full">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchSubmit}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
              value={enteredResult}
              onChange={(e) => setEnteredResult(e.target.value)}
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4 mb-3">Recommended Recipes</h1>

        {error && <p className="text-red-500">{error}</p>}

        {!loading && recipe.length === 0 && <p className="text-yellow-500">No recipes found. Try another search.</p>}

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {!loading &&
            recipe.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                results={recipe}
                {...getRandomColor()}
              />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainRecipePage;
