import { Button, ToTop } from "./ButtonToTop.styled";
import { useState, useEffect } from "react";
const Scroll = require("react-scroll");

const ButtonToTop = () => {
  const [visibleButton, setVisibleButton] = useState(false);
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    window.addEventListener("scroll", onVisibleScrollButton);
  });

  const onVisibleScrollButton = () => {
    if (window.pageYOffset > 200) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {visibleButton && (
        <Button type="button" onClick={handleClick} tabIndex="1">
          <ToTop size={40} tabIndex="0" />
        </Button>
      )}
    </>
  );
};

export default ButtonToTop;
