"use client";

import { BookModel } from "@/types/models/book.models";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";
import { SortContext } from "../sort/sort.provider";

type ContextValue = {
  filteredBooks: BookModel[];
  sortedBooks: BookModel[];
};

export const BooksContext = createContext<ContextValue>({
  filteredBooks: [],
  sortedBooks: [],
});

type Props = PropsWithChildren & {
  books: BookModel[];
};

export default function BooksProvider({ children, books }: Props) {
  const { filters } = useContext(FiltersContext);
  const { sortBy } = useContext(SortContext);

  const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([]);
  const [sortedBooks, setSortedBooks] = useState<BookModel[]>([]);

  const isVisible = useCallback(
    (book: BookModel): boolean => {
      return (
        doesBookInclude(book, filters.query) &&
        doesInclude(book?.categories, filters.categories) &&
        doesInclude(book?.genre, filters.genre) &&
        doesInclude(book.format, filters.format) &&
        doesInclude(book.price, filters.price)
      );
    },
    [filters],
  );

  useEffect(() => {
    setFilteredBooks(books.filter(isVisible));
  }, [isVisible, books]);

  useEffect(() => {
    const sorted = sortBook(filteredBooks, sortBy.sortBy);
    setSortedBooks(sorted);
  }, [filteredBooks, sortBy]);

  return (
    <BooksContext.Provider value={{ filteredBooks, sortedBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

function doesBookInclude(book: BookModel, query?: string): boolean {
  if (!query) {
    return true;
  }
  return doesSomeInclude([book.name, book.brief, book.author], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }
  return items.some((item) => doesInclude(item, query));
}

function doesInclude(
  item: string | undefined[] | undefined | string[],
  query?: string,
): boolean {
  if (!query) {
    return true;
  }

  if (typeof item === "string") {
    return item?.toLowerCase().includes(query.toLowerCase());
  } else if (Array.isArray(item)) {
    return item.some((eachItem) =>
      eachItem?.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return false;
}

function sortBook(books: BookModel[], sortby: string | number): BookModel[] {
  return [...books].sort((a, b) => {
    if (sortby === "year") {
      return b.year - a.year;
    }
    if (sortby === "rating") {
      return b.rating - a.rating;
    }
    if (sortby === "totalVotes") {
      return b.totalVotes - a.totalVotes;
    }

    return 0;
  });
}
