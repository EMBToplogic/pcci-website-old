import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Icons

import { ArrowLeft } from "react-feather";

const BackButton = () => {
  const buttonVariants = {
    initial: {
      backgroundColor: "var(--primary)",
      width: 20,
    },
    animate: {
      left: "0px",
      backgroundColor: "var(--secondary)",
      width: 60,
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
      delay: 0,
    },
  };

  const router = useRouter();
  return (
    <motion.div
      className='back_button'
      variants={buttonVariants}
      initial='initial'
      whileHover='animate'
      transition='transition'
      onClick={() => router.back()}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowLeft />
      </motion.div>
    </motion.div>
  );
};

export default BackButton;
