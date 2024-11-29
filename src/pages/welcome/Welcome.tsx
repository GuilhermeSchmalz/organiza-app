import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import React from 'react';
import WelcomeMessage from "@/components/WelcomeMessage/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <>
      <NavBar />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default Welcome;