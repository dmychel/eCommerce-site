import Product from "../components/product/Product";

import PropTypes from 'prop-types'

const Shop = ({ handleSubmit }) => {
  return (
    <Product handleSubmit={handleSubmit} />
  )
};

Shop.propTypes = {
  handleSubmit: PropTypes.func,
}

export default Shop;
