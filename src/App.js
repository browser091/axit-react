import React from "react";
import "normalize.css";
import "./App.css";
import "../src/components/WhySection/HeaderWhySection/HeaderWhySection.css";
import "../src/components/ColumnWhySection/ColumnWhySection.css";
import WhySection from "./components/WhySection/WhySection";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);
function App() {
  return <WhySection />;
}

export default App;
