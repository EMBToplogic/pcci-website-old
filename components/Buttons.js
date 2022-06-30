import React from "react";

// CSS

import buttonStyles from "../styles/components/Buttons.module.css";

const Buttons = ({ ...props }) => {
  if (props.type === "primary") {
    return (
      <div
        className={buttonStyles.button_primary}
        onClick={props.onClick ? () => props.onClick() : null}
        style={props.customStyles}
      >
        {props.text}
      </div>
    );
  } else {
    return (
      <div
        className={buttonStyles.button_secondary}
        onClick={props.onClick ? () => props.onClick() : null}
        style={props.customStyles}
      >
        {props.text}
      </div>
    );
  }
};

export default Buttons;
