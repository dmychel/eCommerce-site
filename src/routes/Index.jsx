import SubRender from "../components/SubRender";
import styles from "/src/styles/index.module.scss";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className={styles.home}>
      <section className={styles.sub}>
        <div className={styles.text}>
          <Link to="/shop" className={styles.button}>
            SHOP NOW
          </Link>
        </div>
        <div className={styles.image}>
          <img src="/assets/imgs/sub/sub-1.webp" alt="" />
        </div>
      </section>

      <SubRender
        type={false}
        text={`Reborn & Reimagined.`}
        altText={`Onitsuka Tiger grew to become ASICS, and go on to establish itself as one of the world's leading sports brands.`}
        img={`/assets/imgs/sub/sub-2.webp`}
        altImg={`/assets/imgs/sub/tales8.webp`}
      />

      <SubRender
        type={true}
        text={`Reborn & Reimagined.`}
        altText={`Onitsuka Tiger grew to become ASICS, and go on to establish itself as one of the world's leading sports brands.`}
        img={`/assets/imgs/sub/sub-2.webp`}
        altImg={`/assets/imgs/sub/tales8.webp`}
      />

      <SubRender
        type={false}
        text={`Reborn & Reimagined.`}
        altText={`Onitsuka Tiger grew to become ASICS, and go on to establish itself as one of the world's leading sports brands.`}
        img={`/assets/imgs/sub/sub-2.webp`}
        altImg={`/assets/imgs/sub/tales8.webp`}
      />
    </div>
  );
};

export default Index;
