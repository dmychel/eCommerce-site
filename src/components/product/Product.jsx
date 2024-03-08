import ProductChild from "./ProductChild"
import styles from '/src/styles/product.module.scss'

const Product = () => {
    const items = [
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/side.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD"
        },

    ]

    return (
        <div className={styles.productParent}>
            {items.map((obj, index) => (
                <ProductChild product={obj} key={index} />
            ))}
        </div>


    )
}

export default Product