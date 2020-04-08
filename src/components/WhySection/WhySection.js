import React from "react";
import HeaderWhySection from "./HeaderWhySection";
import ColumnWhuSection from "../ColumnWhySection/ColumnWhySection";

function WhySection() {
  return (
    <section className="WhySection">
      <div className="container">
        <HeaderWhySection />
        <ColumnWhuSection />
      </div>
    </section>
  );
}

export default WhySection;
