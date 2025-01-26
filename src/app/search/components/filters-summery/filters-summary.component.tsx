"use client";

import { useContext, useMemo } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";
import { FilterType } from "@/types/filters.type";
import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return (
      !filters?.query &&
      !filters?.genre &&
      !filters?.category &&
      !filters?.format &&
      !filters?.price
    );
  }, [filters]);

  const removeAllButtonClickHandler = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof FilterType): void => {
    dispatchFilters({ type: "removed_filter", key });
  };

  if (isEmpty) {
    return null;
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div
          className={styles.deleteButton}
          onClick={removeAllButtonClickHandler}
        >
          حذف همه
        </div>

        <div className={styles["bottom-container"]}>
          <div className={styles.title}>فیلترهای انتخاب‌شده:</div>

          <ul className={styles.filters}>
            {filters.query && (
              <li onClick={() => filterClickHandler("query")}>
                {filters.query}
              </li>
            )}
            {filters.genre && (
              <li onClick={() => filterClickHandler("genre")}>
                {filters.genre}
              </li>
            )}
            {filters.category && (
              <li onClick={() => filterClickHandler("category")}>
                {filters.category}
              </li>
            )}
            {filters.format && (
              <li onClick={() => filterClickHandler("format")}>
                {filters.format}
              </li>
            )}
          </ul>
        </div>
      </div>
    </CardComponent>
  );
}
