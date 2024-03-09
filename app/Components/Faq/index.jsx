"use client";

import styles from "./styles.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className={styles.container}>
      <h1>FAQ</h1>
      <p className="h-2 w-2 text-black flex flex-col">test</p>
      <div className="w-[95%] max-w-6xl mx-auto md:mt-14 mt-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              deleniti quam maxime, qui quisquam repellat veniam. Quibusdam,
              similique ut perferendis placeat iusto error sapiente illo
              reiciendis consectetur voluptatem optio a.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              delectus impedit debitis beatae provident unde praesentium nihil
              commodi! Labore, excepturi atque. Autem quo sed, explicabo odio
              nobis veritatis quam harum!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolore hic, fuga accusantium aliquid ex quisquam. Qui et ipsa
              voluptatibus nostrum quisquam vel optio at incidunt placeat. In,
              minima qui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              deleniti quam maxime, qui quisquam repellat veniam. Quibusdam,
              similique ut perferendis placeat iusto error sapiente illo
              reiciendis consectetur voluptatem optio a.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              delectus impedit debitis beatae provident unde praesentium nihil
              commodi! Labore, excepturi atque. Autem quo sed, explicabo odio
              nobis veritatis quam harum!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolore hic, fuga accusantium aliquid ex quisquam. Qui et ipsa
              voluptatibus nostrum quisquam vel optio at incidunt placeat. In,
              minima qui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              deleniti quam maxime, qui quisquam repellat veniam. Quibusdam,
              similique ut perferendis placeat iusto error sapiente illo
              reiciendis consectetur voluptatem optio a.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              delectus impedit debitis beatae provident unde praesentium nihil
              commodi! Labore, excepturi atque. Autem quo sed, explicabo odio
              nobis veritatis quam harum!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger> Ursul este in camara,unde este ursul?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolore hic, fuga accusantium aliquid ex quisquam. Qui et ipsa
              voluptatibus nostrum quisquam vel optio at incidunt placeat. In,
              minima qui.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
