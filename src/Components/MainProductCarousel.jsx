import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default: Show 2 slides on larger screens
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  // Adjust settings for small-sized screens using media queries
  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1; // Show 1 slide on small-sized screens
  }
  return (
    <div>
      <h2 className="flex flex-col items-center font-bold text-3xl">
        Horizontal Carousel
      </h2>
      <Slider {...settings}>
        <div>
          <div className="flex flex-row">
            <div style={{ flex: "100%" }}>
              {/* Content for the left half */}
              <img
                className="w-48"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/expresscombocategory-1-1.png"
                alt=""
              />

              <h3>Combo Vending Machines</h3>
              <p>
                Chips, candy, pastries, gum and mints, soda, juices, bottled
                water and even dairy products can be made available through
                combo vending machines.”
              </p>
            </div>

            <div style={{ flex: "100%" }}>
              {/* Content for the right half */}
              <img
                className="w-48"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/ab32category-1.png"
                alt=""
              />
              <h3>Snack Vending Machines</h3>
              <p>
                Whether your break area serves 15 or 500, we have the right
                snack vending machines to serve you.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "50%" }}>
              {/* Content for the left half */}
              <h3>Left Half</h3>
              <p>This is the left side content.</p>
            </div>
            <div style={{ flex: "50%" }}>
              {/* Content for the right half */}
              <h3>Right Half</h3>
              <p>This is the right side content.</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "50%" }}>
              {/* Content for the left half */}
              <h3>Left Half</h3>
              <p>This is the left side content.</p>
            </div>
            <div style={{ flex: "50%" }}>
              {/* Content for the right half */}
              <h3>Right Half</h3>
              <p>This is the right side content.</p>
            </div>
          </div>
        </div>
        {/* Add more content slides as needed */}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
