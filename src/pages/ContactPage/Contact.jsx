import React from "react";
import HeaderAndNavbar from "../../components/headerAndNavbar/HeaderAndNavbar";

import contactBanner from "../../assets/img/contact-banner.jpg";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <HeaderAndNavbar />
      <Banner bannerImg={contactBanner} />

      <section className="container">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-header">Bits & Bots</h2>
            <p className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium sint expedita dignissimos corrupti nihil ad voluptatum
              magnam, optio vero rem sequi ab! Deleniti tempore magni eaque,
              odit incidunt libero? Suscipit molestias magnam, architecto dolor
              neque incidunt! Necessitatibus expedita perferendis quas.
            </p>
          </div>
          <div className="contact-right">
            <ul>
              <li>
                <Link to="/kompani">Kompani veien 31 </Link>
              </li>
              <li>
                <Link to="/spydeberg">1820 Spydeberg</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
