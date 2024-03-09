import styles from "/src/styles/header.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Header = ({ cart }) => {
  return (
    <header>
      <Link to="/">
        <h1>Onitsuka Tiger</h1>
      </Link>
      <nav>
        <Link to="/shop">shop</Link>
        <div className={styles.cart}>
          <Link to='/cart'>
            <img src="/assets/imgs/icons/cart.png" alt="" />
          </Link>
          <span>{cart.length}</span>
        </div>

      </nav>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
}

export default Header;
