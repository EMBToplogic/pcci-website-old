import React from "react";
import Link from "next/link";

// Components

import Buttons from "../Buttons";

// Hooks

import useWindowSize from "../../hooks/useWindowSize";

// CSS

import heroStyles from "../../styles/components/home/Hero.module.css";

const Hero = () => {
  const [height, width] = useWindowSize();

  return (
    <div
      className={heroStyles.hero_main}
      style={{
        height: height,
        minHeight: 1080,
        width: width,
      }}
    >
      <div className='title_container'>
        <h1 className={heroStyles.title}>The Voice of Business</h1>
      </div>
      <div className={heroStyles.button_container}>
        <Buttons
          text={
            <Link href='sign-up'>
              <a>Become a Member</a>
            </Link>
          }
          type='secondary'
          customStyles={{ margin: "0px 5px" }}
        />
        <Buttons
          text={
            <Link href='membership'>
              <a>Members Directory</a>
            </Link>
          }
          type='secondary'
          customStyles={{ margin: "0px 5px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
