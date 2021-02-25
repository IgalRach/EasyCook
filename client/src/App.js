import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/header';
import Footer from './Components/footer';
import ContactPage from './Components/Pages/ContactPage';
import RecipesPage from './Components/Pages/RecipesPage';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';

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
          <Route path="/contact" exact component={ContactPage} />
        </Switch>

        <Footer />

     
    </BrowserRouter>
  );
}

