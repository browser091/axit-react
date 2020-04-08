import React from "react";
import HeaderWhySection from "../WhySection/HeaderWhySection/HeaderWhySection";
import ColumnWhySection from "../WhySection/ColumnWhySection/ColumnWhySection";

function WhySection() {
  return (
    <section className="WhySection">
      <div className="container">
        <HeaderWhySection />
        <ColumnWhySection />
      </div>
    </section>
  );
}

export default WhySection;
