import ProductChild from "./ProductChild"
import styles from '/src/styles/product.module.scss'

const Product = () => {
    const items = [
        {
            preview: '/assets/imgs/preview/delux/side.webp',
            preview2: '/assets/imgs/preview/delux/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 66 Deluxe sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mito/side.webp',
            preview2: '/assets/imgs/preview/mito/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mito low cut sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/mexico-66/side.webp',
            preview2: '/assets/imgs/preview/mexico-66/45-right.webp',
            title: "Onitsuka Tiger",
            model: `Mexico 66 "Cream Peacoat" sneakers`,
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/vintage/side.webp',
            preview2: '/assets/imgs/preview/vintage/45-right.webp',
            title: "Onitsuka Tiger",
            model: `Mexico 66™ Vintage "White/Blue" sneakers`,
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/kill-bill/side.webp',
            preview2: '/assets/imgs/preview/kill-bill/45-right.webp',
            title: "Onitsuka Tiger",
            model: "Mexico 66™ Kill Bill - 2023 sneakers",
            price: "100 USD",
            id: crypto.randomUUID()
        },
        {
            preview: '/assets/imgs/preview/fiery-red/side.webp',
            preview2: '/assets/imgs/preview/fiery-red/45-right.webp',
            title: "Onitsuka Tiger",
            model: `Mexico 66 "Fiery Red" sneakers`,
            price: "100 USD",
            id: crypto.randomUUID()
        },
    ]

    return (
        <section className={styles.productMaster}>
            <div className={styles.productWrapper}>
                {items.map((obj, index) => (
                    <ProductChild product={obj} key={index} />
                ))}
            </div>
        </section>



    )
}

export default Product