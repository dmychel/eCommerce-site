import Product from "../components/product/Product";

import PropTypes from 'prop-types'

const Shop = ({ handleSubmit, quantity, setQuantity }) => {
  return (
    <Product handleSubmit={handleSubmit} quantity={quantity} setQuantity={setQuantity} />
  )
};

Shop.propTypes = {
  handleSubmit: PropTypes.func,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
}

export default Shop;
