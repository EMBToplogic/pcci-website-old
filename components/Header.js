import React from "react";

// CSS

import headerStyles from "../styles/components/Header.module.css";

/* ================ Usage ================ */
/*    <Header
        title={"MAIN_TITLE"}
        noBorder={true} <------- Set this as 'true' if you don't want a border beneath the title.
        isCentered={true} <------- Used to adjust the title to center, if set to false, it the title defaults to the left.
        customButton={
          <Buttons
            text={SAMPLE_BUTTON}
            type='primary'
          />
        } <------- Add a custom button prop to add a button on the right hand side of the header.
      />
/* ================ Usage ================ */

const Header = ({ ...props }) => {
  return (
    <div
      className={
        props.noBorder ? headerStyles.header_main_nb : headerStyles.header_main
      }
    >
      <div
        className={headerStyles.title_container}
        style={{
          justifyContent: props.isCentered ? "center" : "space-between",
        }}
      >
        <h1 className={headerStyles.title}>{props.title}</h1>
        {props.customButton && props.customButton}
      </div>
    </div>
  );
};

export default Header;
