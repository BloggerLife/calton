import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/onlineshop-1ac42.appspot.com/o/landing%20page%2Flanding.jpg?alt=media&token=4be90849-6d79-4f71-860c-369e27a3efdd)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection of all <br /> your Electronic Gadgets
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Step into a world of innovation as you explore our vast collection of
          top-of-the-line electronic devices.
          <br /> From sleek smartphones to powerful laptops, immersive gaming
          consoles to smart home solutions,
          <br /> we bring you the latest advancements that elevate your
          lifestyle.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
