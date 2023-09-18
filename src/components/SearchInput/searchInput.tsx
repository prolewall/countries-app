import { FC, FormEvent, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

import Button from "../Button/button";
import ClearIcon from "./clear.svg";
import SearchIcon from "./search.svg";
import styles from "./searchInput.module.css";

interface SearchInputProps {
  placeholderText: string;
  className?: string;
  searchCallback: (searchValue: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholderText,
  className,
  searchCallback,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCallback(inputRef.current?.value ?? "");
  };

  const handleReset = () => {
    searchCallback("");
  };

  return (
    <>
      <form
        className={`${styles.container} ${className}`}
        onSubmit={handleSearch}
      >
        <Button
          id="search-button"
          variant="inline"
          icon={<SearchIcon style={{ width: "15px", height: "15px" }} />}
        />
        <Tooltip anchorSelect="#search-button" place="top">
          Search
        </Tooltip>

        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder={placeholderText}
        ></input>

        <Button
          id="search-reset-button"
          onClickCallback={handleReset}
          variant="inline"
          icon={<ClearIcon style={{ width: "15px", height: "15px" }} />}
          type="reset"
        />
        <Tooltip anchorSelect="#search-reset-button" place="top">
          Reset search
        </Tooltip>
      </form>
    </>
  );
};

export default SearchInput;
