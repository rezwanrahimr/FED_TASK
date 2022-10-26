import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NextTrip from "../NextTrip/NextTrip";
import Subscrib from "../Subscrib/Subscrib";
import SuppotedBy from "../SuppotedBy/SuppotedBy";
import Testimonials from "../Testimonials/Testimonials";
import TopSelling from "../TopSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <NextTrip></NextTrip>
      <Testimonials></Testimonials>
      <SuppotedBy></SuppotedBy>
      <Subscrib></Subscrib>
      <Footer></Footer>
    </div>
  );
};

export default Home;
