import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NextTrip from "../NextTrip/NextTrip";
import Services from "../Services/Services";
import Subscrib from "../Subscrib/Subscrib";
import SuppotedBy from "../SuppotedBy/SuppotedBy";
import Testimonials from "../Testimonials/Testimonials";
import TopSelling from "../TopSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
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
