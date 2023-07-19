import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className='h-screen bg-violet-600' id='home'>
      <div className='mx-w-[700px] m-auto h-full w-full flex flex-col justify-center xl:items-start items-center'>
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
      </div>
    </div>
  );
};

export default Home;
