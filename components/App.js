import React from "react";
import dynamic from "next/dynamic";

// Components

import Navbar from "./Navbar";
import News from "./home/News";
import Events from "./home/Events";

// Dynamic Components

const Hero = dynamic(() => import("./home/Hero"), { ssr: false });
const CorporateSponsors = dynamic(() => import("./home/CorporateSponsors"), {
  ssr: false,
});

const App = ({ news }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <News news={news.data} />
      <Events />
      <CorporateSponsors />
    </>
  );
};

export default App;
