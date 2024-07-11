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
    <>
      <a href="https://maps.app.goo.gl/7ayy1K7L9BAysyLp6" target="_blanc">
        <Card className="h-64 w-full bg-black text-white shadow-md rounded-lg border-none flex flex-col p-4">
          <CardHeader className="flex items-center w-full mb-2 p-0 justify-center">
            <div className="w-10 h-10 rounded-full bg-gray-400  overflow-hidden">
              <img src={review.src} />
            </div>
            <CardTitle className="">{review.author}</CardTitle>
            <span className="mt-2 ">{review.rating}</span>
          </CardHeader>
          <CardContent className="flex-grow w-full overflow-y-auto">
            <CardDescription className="pr-2">{review.text}</CardDescription>
          </CardContent>
        </Card>
      </a>
    </>
  );
};

export default GoogleReviewCard;
