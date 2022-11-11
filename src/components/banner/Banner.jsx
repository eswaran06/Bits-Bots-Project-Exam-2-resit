import React from "react";

const Banner = ({ bannerImg }) => {
  return (
    <section
      className="banner_area"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="banner_text_area"></div>
      </div>
    </section>
  );
};

export default Banner;
