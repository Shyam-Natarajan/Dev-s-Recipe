import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import HomePage from "./Page/HomePage"
import ReceipePage from "./Page/ReceipePage"
import Favourites from "./Page/Favourites"
import RecipeDetail from "./Page/RecipeDetail"




function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/recipe" element={<ReceipePage/>} />
          <Route path="/favourite" element={<Favourites/>} />
          <Route path="/recipedetails/:id" element={<RecipeDetail/>} />
        </Routes>
    </>
  )
}

export default App
