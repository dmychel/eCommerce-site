import styles from '/src/styles/product.module.scss'
import PropTypes from 'prop-types'

const ProductChild = ({ product }) => {
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
        </div>
    )
}

ProductChild.propTypes = {
    product: PropTypes.object,

}

export default ProductChild