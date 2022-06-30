import React from "react";
import dynamic from "next/dynamic";

// Components

import Navbar from "../components/Navbar";
import News from "../components/home/News";
import Events from "../components/home/Events";

// Dynamic Components

const Hero = dynamic(() => import("../components/home/Hero"), { ssr: false });

const CorporateSponsors = dynamic(
  () => import("../components/home/CorporateSponsors"),
  { ssr: false }
);

const App = ({ news }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <News news={news} />
      <Events />
      <CorporateSponsors />
    </div>
  );
};

export default App;
