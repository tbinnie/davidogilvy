import React from "react";
import heroImage from "../imgs/hero-img.jpeg"

const Landing = () => {
  return (
    <section className="bg-dobeige p-12">
        <div className="hero__wrapper">
          <h1 className="text-4xl tracking-[1.5rem] text-center py-12">DAVID OGILVY</h1>
          <img src={heroImage} className="lg:h-[45rem] w-auto mx-auto mb-12"/>
        </div>

    </section>
  );
};

export default Landing;
