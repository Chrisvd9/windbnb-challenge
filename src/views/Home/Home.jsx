import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import Stays from "../../components/Stays/Stays";

const Home = () => {
  return (
    <main>
      <Header />
      <Stays />
    </main>
  );
};

export default Home;
