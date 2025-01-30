"use client";

import { ReactElement, useContext, useEffect, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select.option.type";
import { SortContext } from "@/app/search/providers/sort/sort.provider";

const options: SelectOptionType[] = [
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "newst", label: "جدیدترین" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0],
  );

  const { dispatchSort } = useContext(SortContext);

  useEffect(() => {
    const sortMapping: Record<string, string> = {
      newst: "year",
      popularity: "rating",
      view: "totalValue",
    };

    dispatchSort({
      type: "updated_sorting",
      sortBy: sortMapping[selectedOption.value],
    });
  }, [selectedOption, dispatchSort]);

  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}
