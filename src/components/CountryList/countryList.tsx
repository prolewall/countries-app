import { FC } from "react";

import CountryCard from "@/components/CountryCard";

import { CountryInfo } from "@/domain/types";

import styles from "./countryList.module.css";

export interface CountryListProps {
  countries: Array<CountryInfo>;
}

const CountryList: FC<CountryListProps> = ({ countries }) => {
  return (
    <div className={styles.container}>
      {countries.map((country, index) => (
        <CountryCard countryInfo={country} key={index} />
      ))}
    </div>
  );
};

export default CountryList;
