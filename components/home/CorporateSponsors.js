import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Components

import Header from "../Header";

// Hooks

import useWindowSize from "../../hooks/useWindowSize";

// Images

import clients from "../../util/clients";

// CSS

import corpoSponsorsStyles from "../../styles/components/home/CorporateSponsors.module.css";

const Carousel = () => {
  const [height, width] = useWindowSize();
  const [constraintLeft, setConstraintLeft] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setConstraintLeft(
      carousel.current.scrollWidth - carousel.current.offsetWidth
    );
  }, []);

  return (
    <motion.div ref={carousel} className={corpoSponsorsStyles.carousel}>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: constraintLeft * -1 }}
        className={corpoSponsorsStyles.inner_carousel}
        whileDrag={{ cursor: "grabbing" }}
      >
        {clients.map((image, index) => {
          return (
            <div className={corpoSponsorsStyles.client_container} key={index}>
              <div className={corpoSponsorsStyles.image_wrapper}>
                <Image
                  src={image}
                  alt=''
                  key={index}
                  layout='fill'
                  objectFit='contain'
                  style={{
                    padding: "10% !important",
                    pointerEvents: "none",
                    maxHeight: "5rem",
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const CorporateSponsors = () => {
  return (
    <div className={corpoSponsorsStyles.corpo_sponsors_container}>
      <Header title={"Corporate Sponsors"} noBorder={true} isCentered={true} />
      <Carousel />
    </div>
  );
};

export default CorporateSponsors;
