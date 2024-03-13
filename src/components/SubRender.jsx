import PropTypes from "prop-types";

const SubRender = ({ type, text, altText, img, altImg }) => {
  function mouseEnter() {
    console.log("mouse enter");
  }

  function mouseLeave() {
    console.log("mouse leave");
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
