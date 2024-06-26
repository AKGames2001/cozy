import React from "react";
import Carousel from "../../components/pages/Home/Carousel";
import Featured from "../../components/pages/Home/Featured";
import AdBanner from "../../components/pages/Home/AdBanner";
import Recommendation from "../../components/pages/Home/Recommendation";
import Discover from "../../components/pages/Home/Discover";

function HomePage() {
  // Carousel with multiple featured titles
  return (
    <>
      <Carousel />
      <Featured />
      <AdBanner />
      <Recommendation />
      <Recommendation />
      <Discover />
    </>
  );
}

export default HomePage;
