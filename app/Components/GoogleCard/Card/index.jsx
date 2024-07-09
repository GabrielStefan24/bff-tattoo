import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import styles from "./styles.module.scss";

const GoogleReviewCard = ({ review }) => {
  return (
    <Card className="w-[100%] h-[100%] max-w-full bg-black text-white shadow-md rounded-lg border-none ">
      <CardHeader className="flex items-center ">
        <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0"></div>
        <CardTitle>{review.author}</CardTitle>
        {review.date && <p className="text-sm mt-2">{review.date}</p>}
      </CardHeader>
      <CardContent>
        <CardDescription className={styles.cardDescription}>
          {review.text}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default GoogleReviewCard;
