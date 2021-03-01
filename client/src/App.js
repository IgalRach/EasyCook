import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TopCategoryItem from './Components/topCategoryItem';
import CategoryList from './Components/categoryList';
import Posts from './Components/posts';
import Contact from './Components/contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './Components/mainPage/main';
import bestRecipes from './Components/mainPage/bestRecipes';
import recipeDetails from './Components/recipeDetails';
import io from "socket.io-client";

//need to add to the final project:
//connecting the server with the client
const socket= io.connect("http://localhost:8082");



export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Preloader */}
        <div id="preloader">
          <i className="circle-preloader" />
          <img src="img/core-img/salad.png" alt="" />
        </div>

        <Header />
        
        <Switch>
          <Route path="/" exact component={bestRecipes} />
        </Switch>


        {/* ##### Top Catagory Area Start ##### */}
        <section className="top-catagory-area section-padding-80-0">
          <div className="container">
            <CategoryList />
          </div>
        </section>
        {/* ##### Top Catagory Area End ##### */}

        {/* ##### CTA Area Start ##### */}
        <section className="cta-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg4.jpg)' }}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                {/* Cta Content */}
                <div className="cta-content text-center">
                  <h2>Gluten Free Receipies</h2>
                  <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
                  <a href="#" className="btn delicious-btn">Discover all the receipies</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### CTA Area End ##### */}

        <Posts />

        <Contact />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

