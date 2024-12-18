


import React from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Num from "./component/Num";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Num />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}

export default App;


