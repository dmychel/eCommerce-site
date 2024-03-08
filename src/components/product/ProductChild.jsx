import styles from '/src/styles/product.module.scss'
import PropTypes from 'prop-types'

const ProductChild = ({ product }) => {
    return (

        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={product.preview} />
            </div>
            <div className={styles.productDesc}>
                <h4>{product.title}</h4>
                <p>{product.model}</p>
                <span>{product.price}</span>
            </div>
        </div>
    )
}

ProductChild.propTypes = {
    product: PropTypes.object,
}

export default ProductChild