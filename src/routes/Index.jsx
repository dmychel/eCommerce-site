import styles from "/src/styles/index.module.scss";

const Index = () => {
  return (
    <section className={styles.home}>
      <div className={styles.sub}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.image}>
          <img src="/assets/imgs/sub-1.webp" alt="" />
        </div>
      </div>

      <div className={`${styles.sub} ${styles.sub2}`}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.image}>
          <img src="/assets/imgs/sub-2.webp" alt="" />
        </div>
      </div>

      <div className={styles.sub}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.image}>
          <img src="/assets/imgs/sub-3.webp" alt="" />
        </div>
      </div>

      <div className={`${styles.sub} ${styles.sub2}`}>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.image}>
          <img src="/assets/imgs/sub-4.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Index;
