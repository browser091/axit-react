import React from "react";
import ThoughtfulDesign from "../ColumnWhySection/ThoughtfulDesignColumn";
import WellCrafted from "../ColumnWhySection/WellCraftedColumn";
import EasytoCustomize from "../ColumnWhySection/EasytoCustomizeColumn";

function ColumnWhySection() {
  return (
    <div className="ColumnWhySection">
      <ThoughtfulDesign />
      <WellCrafted />
      <EasytoCustomize />
    </div>
  );
}

export default ColumnWhySection;
