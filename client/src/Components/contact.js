import React from "react";



export default function Contact() {
    return (
        <section className="quote-subscribe-adds">
        <div className="container">
          <div className="row align-items-end">
            {/* Quote */}
            <div className="col-12 col-lg-4">
              <div className="quote-area text-center">
                <span>"</span>
                <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                <p>John Smith</p>
                <div className="date-comments d-flex justify-content-between">
                  <div className="date">January 04, 2018</div>
                  <div className="comments">2 Comments</div>
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className="col-12 col-lg-4">
              <div className="newsletter-area">
                <h4>Subscribe to our newsletter</h4>
                {/* Form */}
                <div className="newsletter-form bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
                  <form action="#" method="post">
                    <input type="email" name="email" placeholder="Subscribe to newsletter" />
                    <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                  </form>
                  <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                </div>
              </div>
            </div>
            {/* Adds */}
            <div className="col-12 col-lg-4">
              <div className="delicious-add">
                <img src="img/bg-img/add.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
        );
}




