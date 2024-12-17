import React, { createContext, useEffect, useState } from 'react';

export const RecipeResultContext = createContext();

export const RecipeResultProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("chicken");
  const [selectedFilters, setSelectedFilters] = useState([]);

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