import React from "react";
import dynamic from "next/dynamic";

// Components

import Navbar from "../components/Navbar";
import News from "../components/home/News";
import Events from "../components/home/Events";

// Dynamic Components

const Hero = dynamic(() => import("../components/home/Hero"), { ssr: false });

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
      <Events />
    </div>
  );
};

export default App;
