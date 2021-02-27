import React from "react";



export default function Contact() {
    return (
      <>
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

      {/* email */}
      <div className="contact-area section-padding-0-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>Contact Us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="contact-form-area">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="email" className="form-control" id="email" placeholder="E-mail" />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn delicious-btn mt-30" type="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
        );
}




