import React from "react";
import Saudacao from "/src/components/saudacao/Saudacao";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import "../../components/basecss/base.css"
import Carousel from "../Carousel/carousel";

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
    
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))


const Home = () => {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <section className="hidden">
      <div className="saudacao">
        <Saudacao />
      </div>
      </section>

    </>
  );
};

export default Home;
