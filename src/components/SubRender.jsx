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
    <section className={type ? styles.sub : styles.sub2}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={hover ? styles.altText : styles.text}
      >
        {hover ? <p>{altText}</p> : <p>{text}</p>}
      </div>
      <div className={hover ? styles.altImg : styles.image}>
        {hover ? <img src={altImg} /> : <img src={img} />}
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
