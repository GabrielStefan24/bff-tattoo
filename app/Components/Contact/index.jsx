"use client";

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations('Index');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p>{t('contact')}</p>
          <a href="tel:+40792 797 166">+40 792 797 166</a>
        </div>
        <div className={styles.schedule}>
          <p>{t('schedule')}</p>
          <div>
            <span>{t('mondaySaturday')}</span>
            <span>{t('sundayClosed')}</span>
          </div>
        </div>
        <div className={styles.address}>
          <p>{t('address')}</p>
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
