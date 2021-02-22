import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import TopCategoryItem from './components/topCategoryItem';
import CategoryList from './components/categoryList';
import Posts from './components/posts';
import Contact from './components/contact';

export default function App() {
  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <i className="circle-preloader" />
        <img src="img/core-img/salad.png" alt="" />
      </div>
      {/* Search Wrapper */}
      <div className="search-wrapper">
        {/* Close Btn */}
        <div className="close-btn"><i className="fa fa-times" aria-hidden="true" /></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <input type="search" name="search" placeholder="Type any keywords..." />
                <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* ##### Hero Area Start ##### */}
      <section className="hero-area">
        <div className="hero-slides owl-carousel">
          {/* Single Hero Slide */}
          <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg6.jpg)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg7.jpg)' }}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Hero Area End ##### */}
      {/* ##### Top Catagory Area Start ##### */}
      <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <TopCategoryItem />
        </div>
      </section>
      {/* ##### Top Catagory Area End ##### */}
      {/* ##### Best Receipe Area Start ##### */}
      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Receipies</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r1.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Sushi Easy Receipy</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r2.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Burger</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r3.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Vegan Smoothie</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r4.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Calabasa soup</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r5.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Breakfast</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src="img/bg-img/r6.jpg" alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Healthy Fruit Desert</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Best Receipe Area End ##### */}
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
        <Posts/>
   
        <Contact />

        <Footer />
   
    </div>
  );
}

