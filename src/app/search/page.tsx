import React, { ReactElement } from "react";
import FiltersProvider from "./providers/filters/filters.provider";
import { books } from "@/mock/books";
import styles from "./page.module.css";

import { FilterType } from "@/types/filters.type";
import BooksProvider from "@/app/search/providers/books/books.provider";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import FilterSummeryComponent from "@/app/search/components/filters-summery/filters-summary.component";
import CategoryFilterComponent from "./components/category-filter/category-filter.component";
import GenreFilterComponent from "./components/genre-filter/genre-filter.component";
import FormatFilterComponent from "./components/format-filter/format-filter.component";
import SortComponent from "./components/sort/sort.component";
import StatsComponent from "./components/stats/stats.component";
import ResultsComponent from "./components/result/result.component";
import SortProvider from "./providers/sort/sort.provider";

type SearchParams = { [key: string]: string | string | string[] | undefined };

type Props = {
  searchParams: SearchParams;
};

export default function page({ searchParams }: Props): ReactElement {
  const defaultFilters = generateDefaultFilters(searchParams);

  return (
    <SortProvider defaultSortBy={{ sortBy: "" }}>
      <FiltersProvider defaultFilters={defaultFilters}>
        <BooksProvider books={books}>
          <div className={styles.page}>
            <div className={styles.search}>
              <GlobalSearchBoxComponent />
            </div>
            <div className={styles.secondContainer}>
              <div className={styles.filters}>
                <FilterSummeryComponent />
                <CategoryFilterComponent />
                <GenreFilterComponent />
                <FormatFilterComponent />
              </div>
              <div className={styles.results}>
                <SortComponent />
                <div className={styles.stats}>
                  <StatsComponent />
                </div>
                <ResultsComponent />
              </div>
            </div>
          </div>
        </BooksProvider>
      </FiltersProvider>
    </SortProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FilterType {
  const { query, categories, genre, format, price } = searchParams;

  return {
    query: normalizedFilter(query),
    categories: normalizedFilter(categories),
    genre: normalizedFilter(genre),
    format: normalizedFilter(format),
    price: normalizedFilter(price),
  };
}

function normalizedFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}
