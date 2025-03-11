import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default MainLayout;
