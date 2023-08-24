import { FC, FormEvent, useRef, useState } from "react";

import ClearIcon from "./clear.svg";
import SearchIcon from "./search.svg";
import styles from "./searchInput.module.css";

interface SearchInputProps {
  placeholderText: string;
  searchCallback: (searchValue: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholderText,
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
    <form className={styles.container} onSubmit={handleSearch}>
      <button className={styles.button}>
        <SearchIcon className={styles.icon} />
      </button>

      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder={placeholderText}
      ></input>

      <button type="reset" className={styles.button} onClick={handleReset}>
        <ClearIcon className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchInput;
