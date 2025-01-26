import  { Suspense } from "react";

import moment from "moment";

import { books } from "@/mock/books";
import { notFound } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import MingcuteComments from "@/icons/MingcuteComments";
import MingcuteUser from "@/icons/MingcuteUser";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import { BookModel } from "@/types/models/book.models";
import BrifeComponent from "./brife.component";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const book = await getBook(params?.id);

  if (!book) {
    return notFound();
  }

  const renderStars = (stars: number) => {
    return Array.from({ length: stars }, (_, index) => (
      <MingcuteStarFill key={index} />
    ));
  };

  return (
    <div className={styles.eachBookContainer}>
      <div className={styles.topSection}>
        <div className={styles.eachImage}>
          <Image src={book?.image} alt={book?.name} width={400} height={400} />
        </div>

        <div className={styles.eachDescriptionContainer}>
          <div className={styles.instockLabel}>
            {book?.inStock == true ? <span>موجود</span> : <span>ناموجود</span>}
          </div>
          <h1>{book?.name}</h1>
          <div className={styles.author}>
            <div>
              <span className={styles.bold}>نویسنده: </span>
              <span> {book?.author}</span>
            </div>
            <div>
              <span className={styles.bold}>امتیاز: </span>
              <span>{book?.rating}</span>
            </div>
          </div>
          <div className={styles.eachPrice}>{book?.price} تومان</div>
          <div className={styles.description}>
            <Suspense fallback="...">
              <BrifeComponent content={book?.brief} />
            </Suspense>
          </div>
          <div className={styles.button}>
            <button>اضافه کردن به سبد</button>
          </div>
          <div>
            <span>دسته بندی :</span>
            {book?.category?.map((each, index) => (
              <span className={styles.categoryLabel} key={index}>
                {each}
              </span>
            ))}
          </div>

          <div className={styles.line}></div>

          <div className={styles.comments}>
            <div className={styles.commentTitle}>
              <MingcuteComments />
              <h3>نظرات</h3>
            </div>
            {book?.comments?.map((comment, index) => (
              <div key={index} className={styles.eachComment}>
                <div className={styles.right}>
                  <div className={styles.user}>
                    <MingcuteUser />
                  </div>
                  <div>
                    <div>{renderStars(comment?.stars)}</div>
                    <div>{comment.name}</div>
                    <div>{moment(comment.date).format("yy/mm/dd")}</div>
                  </div>
                </div>

                <div className={styles.left}>{comment.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getBook(id: string): Promise<BookModel | undefined> {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      const result = books.find((x): boolean => x.id == id);
      resolve(result);
    }, 1000);
  });
}
