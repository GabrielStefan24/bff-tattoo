"use client";

import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p>CONTACT</p>
          <a href="tel:+40792 797 166">+40 792 797 166</a>
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
          <a href="https://maps.app.goo.gl/1SRzt2yeY1q1e1Ka9">
            Strada Știrbei Vodă 83, <br />
            București 010124
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
