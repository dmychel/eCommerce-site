import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>Error 404</h2>
      <p>
        It seems this page doesn&apos;t exist. <Link to="/">Click Here</Link> to
        navigate back to the home page.
      </p>
    </>
  );
};

export default Error;
