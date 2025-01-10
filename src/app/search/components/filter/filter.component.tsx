"use client";

import { useContext } from "react";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button-component";

import { FilterContext } from "../../providers/filters/filters.provider";

import { FiltersType } from "../../../../types/filters.type";

import styles from "./filter.module.css";

type Option = {
  key: keyof FiltersType;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({ title, options }: Props) {
  const { filters, changeFilter } = useContext(FilterContext);

  return (
    <CardComponent>
      <div className={styles.filter}>
        <div className={styles.title}> {title} </div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent
              key={option.key}
              isActive={filters[option.key]}
              onClick={() => changeFilter(option.key, !filters[option.key])}
            >
              {option.label}
            </FilterButtonComponent>
          ))}
          {/* <FilterButtonComponent>فرد</FilterButtonComponent> */}
        </div>
      </div>
    </CardComponent>
  );
}
