import ProductChild from "./ProductChild"
import styles from '/src/styles/product.module.scss'

const Product = () => {
    const items = [
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 'Cream Peacot' sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
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