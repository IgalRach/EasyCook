import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/header';
import Footer from './Components/footer';
import ContactPage from './Components/Pages/ContactPage';
import RecipesPage from './Components/Pages/RecipesPage';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import DetailsPage from './Components/Pages/DetailsPage';
import CookingPage from './Components/Pages/CookingPage';
import Search from './Components/search';
import io from "socket.io-client";


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
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/search" exact component={() => <Search />} />
        </Switch>

        <Footer />

     
    </BrowserRouter>
  );
}

