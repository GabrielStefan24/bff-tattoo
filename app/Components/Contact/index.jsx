import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p>CONTACT</p>
          <a href="tel:+40792 797 166">0792 797 166</a>
        </div>
        <div className={styles.schedule}>
          <p>SCHEDULE</p>
          <div>
            <span>Monday - Saturday 10:30 - 18:00 </span>
            <span>Sunday : Closed </span>
          </div>
        </div>
        <div className={styles.adress}>
          <p>ADRESS</p>
          <span>
            Strada Știrbei Vodă 85, <br />
            București 010124
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
