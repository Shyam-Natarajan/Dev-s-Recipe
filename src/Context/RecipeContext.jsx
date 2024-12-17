import React, { createContext, useEffect, useState } from 'react';

export const RecipeResultContext = createContext();

export const RecipeResultProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Add verbose logging
  useEffect(() => {
    console.log(" GLOBAL CONTEXT UPDATE:");
    console.log("Search Query:", searchQuery);
    console.log("Selected Filters:", JSON.stringify(selectedFilters, null, 2));
  }, [searchQuery, selectedFilters]);

  return (
    <RecipeResultContext.Provider 
      value={{ 
        recipeData, 
        setRecipeData, 
        searchQuery,  
        setSearchQuery, 
        selectedFilters, 
        setSelectedFilters 
      }}
    >
      {children}
    </RecipeResultContext.Provider>
  );
};