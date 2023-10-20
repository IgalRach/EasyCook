import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipesPage from './Components/Pages/RecipesPage';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import DetailsPage from './Components/Pages/DetailsPage';
import CookingPage from './Components/Pages/CookingPage';
import Search from './Components/search';
import RecipesByCategory from './Components/recipesByCategory';
import io from "socket.io-client";
import CategoriesPage from './Components/Pages/CategoriesPage';


const socket= io.connect("http://localhost:8082");

export default function App() {
  return (
    <BrowserRouter>
    
        {/* Preloader */}
        <div id="preloader">
          <i className="circle-preloader" />
          <img src="img/core-img/salad.png" alt="" />
        </div>

        <Header />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/recipes" exact component={RecipesPage} />
          <Route path="/recipes/:id" exact component={DetailsPage} />
          <Route path="/cookingTerms" exact component={CookingPage} />
          <Route path="/categories/" exact component={CategoriesPage} />
          <Route path="/search" exact component={() => <Search />} />
          {/* <Route path="/categories/category/:name" excat component={RecipesByCategory} /> */}
          <Route path="/category/:name" excat component={RecipesByCategory} />
        </Switch>

        <Footer />

     
    </BrowserRouter>
  );
}

