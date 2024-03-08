import styles from "/src/styles/header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"><h1>Onitsuka Tiger</h1></Link>
      <nav>
        <span>shop</span>
        <span>cart</span>
      </nav>
    </header>
  );
};

export default Header;
