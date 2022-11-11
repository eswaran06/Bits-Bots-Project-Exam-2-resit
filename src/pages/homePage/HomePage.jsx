import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";
import HeaderAndNavbar from "../../components/headerAndNavbar/HeaderAndNavbar";
import Banner from "../../components/banner/Banner";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../components/spinner/Spinner";
import Pagination from "../../components/pagination/Pagination";

import genreData from "../../assets/genreData";
import isPropertyMatched from "../../assets/isMatched";
import CategoryCard from "../../components/categoryCard/CategoryCard";

import bannerImg from "../../assets/img/banner.jpg";

const HomePage = () => {
  const { isLoading, products, error } = useSelector((state) => state.products);
  const currentItems = useSelector((state) => state.pagination.currentItems);

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    setCategoryProducts(currentItems);
  }, [currentItems]);

  const handleFilterByGenre = (id) => {
    const newArr = [];

    for (let i = 0; i < products.length; i++) {
      const checkPlatform = isPropertyMatched(products[i], id, "genres");
      if (checkPlatform) {
        newArr.push(products[i]);
      }
    }
    setCategoryProducts(newArr);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {/* Header And Navbar */}
          <HeaderAndNavbar />

          {/* Banner  */}
          <Banner bannerImg={bannerImg} />

          {/* Product Section */}
          {/* <section className='item'>
            <div className='container card-container'>
              <div className='item_text card-item-container'>
                {products &&
                  currentItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </section> */}
          <section className="checkBox">
            <div className="container">
              <div className="checkBox_text">
                <div className="d-md-none d-block filter">
                  <a href="#">
                    <i
                      className="fa fa-sort-amount-desc"
                      aria-hidden="true"
                    ></i>{" "}
                    filter
                  </a>
                </div>
                <div className="row">
                  {/* <!-- single item area start  --> */}
                  <div className="col-md-3">
                    <div className="left_checkBox_area_extra">
                      <div className="left_checkBox_area">
                        <div className="checkbox_area ">
                          <h2>Genre</h2>
                          {genreData?.map((data) => (
                            <label key={data.id} className="custom_checkbox_2">
                              <input
                                onChange={() => handleFilterByGenre(data.id)}
                                type="checkbox"
                                name="genre"
                              />{" "}
                              <p>
                                {" "}
                                <span>{data.name}</span>
                              </p>
                              <span className="checkmark"></span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single item area start  --> */}
                  <div className="col-md-9">
                    <div className="right_checkBox_area">
                      <div className="row g-5">
                        {categoryProducts.length !== 0 ? (
                          categoryProducts.map((product) => (
                            <CategoryCard key={product.id} product={product} />
                          ))
                        ) : (
                          <p
                            className="fw-bold"
                            style={{ textAlign: "center", fontSize: "20px" }}
                          >
                            No games Available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pagination */}
          <Pagination products={products} />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
