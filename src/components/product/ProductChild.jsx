import styles from '/src/styles/product.module.scss'
import PropTypes from 'prop-types'

import { useState } from 'react';

const ProductChild = ({ product, handleSubmit }) => {
    const [quantity, setQuantity] = useState(0);
    const mouseOver = (id) => {
        const img = document.getElementById(id)
        img.src = product.preview2
    }

    const mouseOut = (id) => {
        const img = document.getElementById(id)
        img.src = product.preview
    }

    return (
        <div className={styles.product} onMouseOver={() => mouseOver(product.id)} onMouseOut={() => mouseOut(product.id)} >
            <div className={styles.productImage}>
                <img src={product.preview} id={product.id} />
            </div>
            <div className={styles.productDesc}>
                <h4>{product.title}</h4>
                <p>{product.model}</p>
                <span>{product.price}</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e, product, quantity)}>
                <input type="number" min={0} max={99} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <input type="submit" value='&#9989;' />
            </form>
        </div>
    )
}

ProductChild.propTypes = {
    product: PropTypes.object,
    handleSubmit: PropTypes.func,
}

export default ProductChild