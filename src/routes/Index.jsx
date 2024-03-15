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
        text={`BORN FROM AMBITION`}
        altText={`A story that started from a humble idea that sport had the power to transform lives. Anima Sana In Corpore Sano - sound mind, sound body. The Latin maxim that was the ethos behind Onitsuka Tiger, and later became the acronym ASICS.`}
        img={`/assets/imgs/sub/sub-4.webp`}
        altImg={`/assets/imgs/sub/tales1.webp`}
      />

      <SubRender
        type={true}
        text={`THE BIRTH OF AN ICON`}
        altText={`Changes made in 1966 are still evident today. The Onitsuka Tiger stripe first appeared that year and still adorns the sides of Onitsuka Tiger and ASICS shoes. The stripe first appeared on the LIMBER UP Leather BK, introduced for the 1968 Mexico Olympic Game.`}
        img={`/assets/imgs/sub/sub-2.webp`}
        altImg={`/assets/imgs/sub/tales5.webp`}
      />

      <SubRender
        type={false}
        text={`Reborn & Reimagined.`}
        altText={`Onitsuka Tiger grew to become ASICS, and go on to establish itself as one of the world's leading sports brands.`}
        img={`/assets/imgs/sub/sub-3.webp`}
        altImg={`/assets/imgs/sub/tales8.webp`}
      />
    </div>
  );
};

export default Index;
