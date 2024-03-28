import React from "react";
import Carousel from "./Carousel";
import Featured from "./Featured";
import AdBanner from "./AdBanner";
import Recommendation from "./Recommendation";
import Discover from "./Discover";

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
