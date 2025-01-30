"use client";

import { ReactElement, useContext } from "react";

import Link from "next/link";

import MingcuteStarFill from "@/icons/MingcuteStarFill";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./results.module.css";
import { BookModel } from "@/types/models/book.models";
import { BooksContext } from "../../providers/books/books.provider";

export default function ResultsComponent(): ReactElement {
  const { filteredBooks, sortedBooks } = useContext(BooksContext);

  const booksToRender = sortedBooks?.length > 0 ? sortedBooks : filteredBooks;

  return (
    <ul className={styles.results}>
      {booksToRender.map((book: BookModel) => (
        <li key={book.id}>
          <div className={styles.header}>
            <div className={styles.image}>
              <img
                src={book.image}
                alt="عکس کتاب موردنظر"
                width={150}
                height={150}
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div className={styles.name}>{book.name}</div>
            <div className={styles.brief}>{book.brief}</div>
            <div className={styles.badges}>
              {book?.categories?.map((category) => (
                <div key={category} className={styles.badge}>
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.address}>
            <MingcuteLocationLine /> نویسنده: {book.author}
          </div>
          <div className={styles.actions}>
            <div className={styles.rating}>
              <MingcuteStarFill className={styles.icon} />{" "}
              <span className={styles["average-rating"]}>
                {Math.floor(book.rating * 10) / 10}
              </span>{" "}
              <span className={styles["total-votes"]}>
                ({book.totalVotes} نظر)
              </span>
            </div>
            <Link href={`/book/${book.id}`}>خرید کتاب</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
