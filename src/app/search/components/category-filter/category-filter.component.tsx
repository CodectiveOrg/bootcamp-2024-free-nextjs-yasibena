"use client";

import React, { useContext } from "react";
import { FiltersContext } from "../../providers/filters/filters.provider";
import RadioFilterComponent from "../radio-filter/radio-filter.component";

export default function CategoryFilterComponent() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "categories", value });
  };

  return (
    <RadioFilterComponent
      title="دسته بندی ها"
      name="categories"
      options={[
        { value: "کلاسیک", label: "کلاسیک" },
        { value: "مدرن", label: "مدرن" },
        { value: "رمان", label: "رمان" },
        { value: "حماسه عاشقانه", label: "حماسه عاشقانه" },
        { value: "سوررئالیسم", label: "سوررئالیسم" },
        { value: "صوفیانه", label: "صوفیانه" },
        { value: "کودک", label: "کودک" },
      ]}
      value={filters?.categories}
      onChange={changeHandler}
    />
  );
}
