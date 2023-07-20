import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create an array of stars with random animation delays and positions
    const initialStars = Array.from({ length: 50 }).map((_, index) => ({
      animationDelay: `${Math.random() * 5}s`,
      top: `${Math.random() * 100}vh`, // Random top position within the visible screen area
      left: `${Math.random() * 100}vw`, // Random left position within the visible screen area
    }));
    setStars(initialStars);
  }, []);

  return (
    <div className='relative h-screen bg-indigo-950' id='home'>
      {/* Falling shooting stars */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        {stars.map((star, index) => (
          <div
            key={index}
            className='absolute h-1 w-1 bg-white rounded-full animate-fall-star'
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      <div className='mx-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-violet-200'>
          Hi! I'm Chaitra
        </h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-violet-200'>
          I'm a
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Coder",
              1000,
              "Tech Enthusiast",
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{
              fontSize: "2rem",
              display: "inline-block",
              paddingLeft: "5px",
            }}
            repeat={Infinity}
          />
        </h2>
        <a
          href='/contact'
          className='group relative grid overflow-hidden w-24 h-24 rounded-full px-4 py-1 top-4 text-center shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200'
        >
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className='backdrop absolute inset-[1px] rounded-full bg-violet-950 transition-colors duration-200 group-hover:bg-violet-300' />
          <span className='text z-10 text-[#cbd5e1]'>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
