import React, { ReactElement } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import HandBook from "./components/HandBook";
import Header from "./components/Header";
import MedicalFacility from "./components/MedicalFacility";
import OutStandingDoctors from "./components/OutStandingDoctors";
import Specialty from "./components/Specialty";

export default function HomePage(): ReactElement {
  return (
    <>
      <div className='container'>
        <Header />
      </div>
      <Banner />
      <Specialty />
      <MedicalFacility />
      <OutStandingDoctors />
      <HandBook />
      <About />
      <Footer />
    </>
  );
}
