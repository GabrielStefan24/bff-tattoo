"use client";

import styles from "./styles.module.scss";
import { useTranslations, useLocale } from "next-intl";

const Contact = () => {
  const tIndex = useTranslations("Index");
  const tImpressum = useTranslations("Impressum");
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CORRECTED LOGIC: Show contact/schedule ONLY for 'ro' and 'en' */}
        {(locale === "ro" || locale === "en") && (
          <>
            <div className={styles.contact}>
              <p>{tIndex("contact")}</p>
              <a href="tel:+40728377033">+40 728 377 033</a>
            </div>
            <div className={styles.schedule}>
              <p>{tIndex("schedule")}</p>
              <div>
                <span>{tIndex("mondaySaturday")}</span>
                <span>{tIndex("sundayClosed")}</span>
              </div>
            </div>
          </>
        )}

        {/* --- REST OF THE CONDITIONAL RENDERING --- */}

        {/* ROMANIAN ADDRESS (this logic remains correct) */}
        {locale === "ro" && (
          <div className={styles.address}>
            <p>{tIndex("address")}</p>
            <a
              href="https://www.google.com/maps/place/Hohnerstra%C3%9Fe+25,+70469+Stuttgart,+Germany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{tIndex("address1")}</div>
              <div>{tIndex("address2")}</div>
            </a>
          </div>
        )}

        {/* STYLED GERMAN IMPRESSUM (this logic remains correct) */}
        {locale === "de" && (
          <div className={styles.impressum}>
            <div className={styles.impressumSection}>
              <p>{tIndex("contact")}</p>
              <a href="tel:+49 1521 9512430">+49 1521 9512430</a>
            </div>

            <div className={styles.impressumSection}>
              <span className={styles.impressumLabel}>
                {tImpressum("studioNameLabel")}
              </span>
              <span className={styles.impressumValue}>
                {tImpressum("studioNameValue")}
              </span>
            </div>

            <div className={styles.impressumSection}>
              <span className={styles.impressumLabel}>
                {tImpressum("operatorLabel")}
              </span>
              <span className={styles.impressumValue}>
                {tImpressum("operatorName")} <br />
                {tImpressum("operatorAddress1")} <br />
                {tImpressum("operatorAddress2")} <br />
                {tImpressum("operatorCountry")}
              </span>
            </div>

            <div className={styles.impressumSection}>
              <span className={styles.impressumLabel}>
                {tImpressum("registerLabel")}
              </span>
              <span className={styles.impressumValue}>
                {tImpressum("registerCourt")} <br />
                {tImpressum("registerNumber")}
              </span>
            </div>

            <div className={styles.impressumSection}>
              <span className={styles.impressumLabel}>
                {tImpressum("vatLabel")}
              </span>
              <span className={styles.impressumValue}>
                {tImpressum("vatNumber")}
              </span>
            </div>

            <div className={styles.impressumSection}>
              <span className={styles.impressumLabel}>
                {tImpressum("contentResponsibleLabel")}
              </span>
              <span className={styles.impressumValue}>
                {tImpressum("contentResponsibleName")}
              </span>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Contact;
