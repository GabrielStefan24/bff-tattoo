"use client";

import styles from "./styles.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("FAQ");

  return (
    <section className={styles.container}>
      <h1>FAQ</h1>
      <div className="w-[95%] max-w-6xl mx-auto md:mt-14 mt-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("howPrice")}</AccordionTrigger>
            <AccordionContent>{t("howPriceAnswer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("prepareAppointment")}</AccordionTrigger>
            <AccordionContent>{t("prepareAppointmentAnswer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t("bookAppointment")}</AccordionTrigger>
            <AccordionContent>{t("bookAppointmentAnswer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{t("appointmentWaitTime")}</AccordionTrigger>
            <AccordionContent>{t("appointmentWaitTimeAnswer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{t("coverUps")}</AccordionTrigger>
            <AccordionContent>{t("coverUpsAnswer")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>{t("messageContent")}</AccordionTrigger>
            <AccordionContent>{t("messageContentAnswer")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
