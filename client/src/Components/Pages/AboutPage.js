import React from "react";



export default function AboutPage() {
    return (
        <>
     <div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb1.jpg)'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>About us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>Who we are and what we do?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6 className="sub-heading pb-5">Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</h6>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="row align-items-center mt-70">
            {/* Single Cool Fact */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact">
                <img src="img/core-img/salad.png" alt="" />
                <h3><span className="counter">1287</span></h3>
                <h6>Amazing receipies</h6>
              </div>
            </div>
            {/* Single Cool Fact */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact">
                <img src="img/core-img/hamburger.png" alt="" />
                <h3><span className="counter">25</span></h3>
                <h6>Burger receipies</h6>
              </div>
            </div>
            {/* Single Cool Fact */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact">
                <img src="img/core-img/rib.png" alt="" />
                <h3><span className="counter">471</span></h3>
                <h6>Meat receipies</h6>
              </div>
            </div>
            {/* Single Cool Fact */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact">
                <img src="img/core-img/pancake.png" alt="" />
                <h3><span className="counter">326</span></h3>
                <h6>Desert receipies</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img className="mb-70" src="img/bg-img/about.png" alt="" />
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us Instragram</h5>
            </div>
          </div>
        </div>
        {/* Instagram Feeds */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta1.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta2.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta3.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta4.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta5.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta6.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta7.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
        </>
        );
}




