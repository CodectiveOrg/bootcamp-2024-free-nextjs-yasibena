import MingcuteUser from "@/icons/MingcuteUser";

import styles from "@/app/book/[id]/page.module.css";
import MingcuteStarFill from "@/icons/MingcuteStarFill";

import { CommentModel } from "@/types/models/comment.model";

interface CommentProps {
  index: number;
  comment: CommentModel;
}

const renderStars = (stars: number) => {
  return Array.from({ length: stars }, (_, index) => (
    <MingcuteStarFill key={index} color="hsl(51, 100%, 50%)" />
  ));
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export default function Comment({ index, comment }: CommentProps) {
  return (
    <div key={index} className={styles.comment}>
      <div className={styles.avatar}>
        <div className={styles.user}>
          <MingcuteUser />
        </div>
        <div>
          <div>{renderStars(comment?.stars)}</div>
          <div>{comment.name}</div>
          <div>{dateFormatter.format(new Date(comment.date))}</div>
        </div>
      </div>
      <div className={styles.content}>{comment.description}</div>
    </div>
  );
}
