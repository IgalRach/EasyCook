
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Item from "./Components/Item";
// import A from "./Components/a";
// import B from "./Components/b";
// import Menu from "./Components/menu";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
 return (


<div>
  
  <Header/>
  {/* Page Content */}
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
      </div>
      {/* /.col-lg-3 */}
      <div className="col-lg-9">
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* <div className="row">
      <Item name=" recepie 1" ingredient="kind of food"/>
      <Item name ="recepie 2" ingredient="kind of food"/> 
      <Item name ="recepie 3" ingredient="kind of food"/>
      <Item name ="recepie 4" ingredient="kind of food"/>
      <Item name ="recepie 5" ingredient="kind of food"/>
      <Item  name ="recepie 6" ingredient="kind of food"/>  
             
          </div> */}
        {/* /.row */}
      </div>
      {/* /.col-lg-9 */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
  {/* Footer */}
  <Footer/>

  </div>

 );
}