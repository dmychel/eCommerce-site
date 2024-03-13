import PropTypes from "prop-types";
import { useState } from "react";

const SubRender = ({ type, text, altText, img, altImg }) => {
  const [hover, setHover] = useState(false);

  function mouseEnter() {
    setHover(true);
  }

  function mouseLeave() {
    setHover(false);
  }

  return (
    <section onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div>
        <p></p>
      </div>
      <div>
        <img src="" />
      </div>
    </section>
  );
};

SubRender.propTypes = {
  type: PropTypes.bool,
  text: PropTypes.string,
  altText: PropTypes.string,
  img: PropTypes.string,
  altImg: PropTypes.string,
};

export default SubRender;
