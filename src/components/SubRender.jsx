import PropTypes from "prop-types";
import { useState } from "react";
import styles from "/src/styles/sub.module.scss";

const SubRender = ({ type, text, altText, img, altImg }) => {
  const [hover, setHover] = useState(false);

  function mouseEnter() {
    setHover(true);
  }

  function mouseLeave() {
    setHover(false);
  }

  return (
    <section
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={type ? styles.sub : styles.sub2}
    >
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
