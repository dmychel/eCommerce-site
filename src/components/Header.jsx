import styles from "/src/styles/header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"><h1>Onitsuka Tiger</h1></Link>
      <nav>
        <Link to='/shop'>shop</Link>
        <Link to='/cart' className={styles.cart}><img src="/assets/imgs/icons/cart.png" alt="" /></Link>
      </nav>
    </header>
  );
};

export default Header;
