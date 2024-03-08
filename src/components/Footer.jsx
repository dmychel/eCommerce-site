import styles from "/src/styles/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.support}>
        <h2>SUPPORT</h2>
        <span>Contact Us</span>
        <span>Returns</span>
      </div>
      <div className={styles.brand}>
        <h2>BRAND</h2>
        <span>Onitsuka Tiger</span>
        <span>ONITSUKA TIGER</span>
        <span>OTIGER</span>
        <span>THE ONITSUKA</span>
      </div>
      <div className={styles.about}>
        <h2>ABOUT</h2>
        <span>About Onitsuka Tiger - Tiger Tales</span>
        <span>NewCA Notices/Privacy Rights</span>
        <span>CA Supply Chains Act</span>
        <span>Overview of ASICS Companies</span>
      </div>
    </footer>
  );
};

export default Footer;
