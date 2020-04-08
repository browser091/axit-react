import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
function WellCrafted() {
  return (
    <div className="why-item">
      <span className="fa fa-keyboard-o">
        <FontAwesomeIcon icon={faKeyboard} />
      </span>
      <h3 className="why-h3">Well Crafted</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo
        eaque nesciunt ducimus numquam, debitis. Asperiores facere corporis
        inventore
      </p>
    </div>
  );
}

export default WellCrafted;
