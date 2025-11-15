import React from "react";
import bgImg from "./assets/gradient_2.jpg";

const App = () => {
  return (
    <div
      className="main-container min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-[1700px] mx-auto w-[90%] pt-5 pb-5">

        {/* Top Section */}
        <div className="top flex justify-between">
          <div className="top-left leading-5">
            <p className="text-2xl font-bold">More to Explore</p>
            <p className="text-xl">Popular Choices</p>
          </div>
          <div className="top-right">
            <button className="text-xl py-3 px-5 bg-[beige] rounded-xl">
              View More
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="hero-section pt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

          {Array(4).fill(0).map((_, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000"
                  alt="kitchen"
                  className="h-[250px] w-[385px] md:h-auto md:w-auto"
                />
              </div>

              <div className="card-content bg-white px-3 py-3 flex flex-col gap-2">
                <p className="text-xl sm:text-2xl font-bold md:text-base">
                  Marble Carrara White
                </p>

                <div className="btn text-lg flex gap-5 sm:text-base sm:flex-row md:flex-col md:gap-2">
                  <span className="md:text-base">SKU:CWN-1204</span>
                  <span className="pl-1 border-l-[2px] sm:text-base md:border-none md:p-0">
                    Brand:Premium Stone Co.
                  </span>
                </div>

                <div className="text-lg sm:flex gap-1">
                  <span className="text-2xl font-bold">$16.00</span>
                  <span className="text-xl">$46.00</span>
                  <span className="text-xl md:text-sm md:pt-1">per sq.ft.</span>
                </div>

                <div className="card-bottom flex gap-10 sm:justify-between">
                  <button className="px-7 py-3 bg-[orange] rounded-xl sm:py-[10px] sm:px-[15px]">
                    Add to Cart
                  </button>
                  <button className="px-7 py-3 bg-[orange] rounded-xl sm:py-[10px] sm:px-[15px]">
                    Try On Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="footer-section pt-10 relative flex flex-col lg:flex-row gap-10">

          {/* Left Big Image */}
          <div className="footer-left">
            <img
              src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg"
              alt="room"
              className="w-[900px] h-[540px]"
            />
          </div>

          <div className="footer-left-content text-black flex flex-col gap-2 absolute top-15 left-10 items-start">
            <p className="text-2xl font-bold">Best Seller</p>
            <p className="lg:text-xl max-w-[600px] lg:max-w-[400px] text-sm">
              Shop our best sellers, the most-loved products chosen by customers.
            </p>
            <button className="text-start text-xl px-8 py-3 bg-[orange] rounded-xl">
              Buy Now
            </button>
          </div>

          {/* Right Column */}
          <div className="footer-right flex flex-col gap-10 relative">

            {/* First Small Card */}
            <div className="footer-right-child">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg"
                alt=""
                className="h-[250px] w-[900px]"
              />
            </div>

            <div className="footer-left-content text-black flex flex-col gap-2 absolute top-3 lg:top-2 left-10 items-start">
              <p className="text-2xl font-bold">Best Seller</p>
              <p className="text-sm md:text-base">
                Shop our best sellers chosen for quality and popularity.
              </p>
              <button className="lg:text-xl px-5 py-2 text-sm lg:px-8 lg:py-3 bg-[orange] rounded-xl">
                Buy Now
              </button>
            </div>

            {/* Second Small Card */}
            <div className="footer-right-child">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg"
                alt=""
                className="h-[250px] w-[900px]"
              />
            </div>

            <div className="footer-left-content text-black flex flex-col gap-2 absolute bottom-20 lg:bottom-15 left-10 items-start">
              <p className="text-2xl font-bold">Best Seller</p>
              <p className="md:text-xl text-sm">
                Most-loved products with unbeatable value.
              </p>
              <button className="lg:text-xl px-5 py-2 text-sm lg:px-8 lg:py-3 bg-[orange] rounded-xl">
                Buy Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
