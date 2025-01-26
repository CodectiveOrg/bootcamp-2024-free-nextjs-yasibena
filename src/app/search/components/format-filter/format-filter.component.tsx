"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function FormatFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "format", value });
  };

  return (
    <RadioFilterComponent
      title=" فرمت کتاب"
      name="format"
      options={[
        { value: "صوتی", label: "صوتی" },
        { value: "کتاب الکترونیکی", label: "کتاب الکترونیکی" },
        { value: "چاپی", label: "چاپی" },
      ]}
      value={filters?.genre}
      onChange={changeHandler}
    />
  );
}
