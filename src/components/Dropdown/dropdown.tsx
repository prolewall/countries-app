"use client";

import { FC } from "react";
import Select, { Options } from "react-select";

import "./dropdown.css";

interface DropdownProps {
  placeholder: string;
  values: ReadonlyArray<string> | Array<string>;
  onChange: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ placeholder, values, onChange }) => {
  const options = values.map((value) => ({ value: value, label: value }));

  return (
    <Select
      // instanceId added to fix hydration error https://github.com/JedWatson/react-select/issues/5459#issuecomment-1312245530
      instanceId={"dropdown"}
      placeholder={placeholder}
      options={options}
      isSearchable={false}
      isClearable={true}
      className="Dropdown"
      classNamePrefix="Dropdown"
      onChange={(option) => onChange(option ? option.value : "")}
    />
  );
};

export default Dropdown;
