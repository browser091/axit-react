import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

function ThoughtfulDesign() {
  return (
    <div className="why-item">
      <span className="fa fa-lightbulb-o">
        <FontAwesomeIcon icon={faLightbulb} />
      </span>
      <h3 className="why-h3">Thoughtful Design</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo
        eaque nesciunt ducimus numquam, debitis. Asperiores facere corporis
        inventore
      </p>
    </div>
  );
}

export default ThoughtfulDesign;
