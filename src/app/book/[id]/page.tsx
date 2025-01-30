import { books } from "@/mock/books";
import { notFound } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.css";
import MingcuteComments from "@/icons/MingcuteComments";

import { BookModel } from "@/types/models/book.models";
import Comment from "@/app/search/components/comment/comment";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const book = await getBook(params?.id);

  if (!book) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.section}>
        <div className={styles.image}>
          <Image src={book.image} alt={book.name} width={400} height={400} />
        </div>

        <div className={styles.description}>
          <div className={styles.label}>
            {book.inStock ? <span>موجود</span> : <span>ناموجود</span>}
          </div>
          <h1>{book.name}</h1>
          <div className={styles.author}>
            <div>
              <span className={styles.bold}>نویسنده: </span>
              <span> {book.author}</span>
            </div>
          </div>
          <div>
            <span className={styles.bold}>امتیاز: </span>
            <span>{book.rating}</span>
          </div>
          <div className={styles.price}>
            {parseInt(book.price).toLocaleString()} تومان
          </div>
          <div className={styles.description}>{book.brief}</div>
          <button>اضافه کردن به سبد</button>
          <div>
            <span>دسته بندی :</span>
            {book.categories?.map((category, index) => (
              <span className={styles["category"]} key={index}>
                {category}
              </span>
            ))}
          </div>

          <div className={styles.line}></div>

          <div className={styles.comments}>
            <div className={styles.title}>
              <MingcuteComments />
              <span>نظرات</span>
            </div>
            {book.comments?.map((comment, index) => (
              <Comment key={index} index={index} comment={comment} />
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
      const result = books.find((x): boolean => x.id === id);
      resolve(result);
    }, 1000);
  });
}
