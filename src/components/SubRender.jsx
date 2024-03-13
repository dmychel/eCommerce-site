import PropTypes from "prop-types";

const SubRender = ({ type, text, altText, img, altImg }) => {
  return (
    <section>
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
