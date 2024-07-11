import * as React from "react";
import styles from "./styles.module.scss";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GoogleReviewCard from "./Card";
import { useTranslations } from "next-intl";
import { reviews } from "./reviews";

const CarouselSize = () => {
  const t = useTranslations("Index");

  return (
    <section className={styles.container}>
      <h1>{t("review")}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[70%] mx-auto mt-20"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 hover:scale-105 transition-all">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <GoogleReviewCard review={review} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export default CarouselSize;
