import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function EasytoCustomize() {
  return (
    <div className="why-item">
      <span className="fa fa-bolt">
        <FontAwesomeIcon icon={faBolt} />
      </span>
      <h3 className="why-h3">Easy to Customize</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo
        eaque nesciunt ducimus numquam, debitis. Asperiores facere corporis
        inventore
      </p>
    </div>
  );
}

export default EasytoCustomize;
