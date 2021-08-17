import React from "react";
import Footer from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { WhyUs } from "../Components/Why/WhyUs";
import { Works } from "../Components/Workds/Works";
export const screen1 = () => {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Works />
        <WhyUs />
        <Footer />
      </main>
    </div>
  );
};
