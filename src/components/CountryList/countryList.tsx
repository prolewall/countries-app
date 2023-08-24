import { FC } from "react";

import CountryCard from "@/components/CountryCard";

import { CountryInfo } from "@/domain/types";

import LoadingTemplate from "../LoadingTemplate/loadingTemplate";
import styles from "./countryList.module.css";

export interface CountryListProps {
  countries: Array<CountryInfo>;
  loading: boolean;
}

const CountryList: FC<CountryListProps> = ({ countries, loading }) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingTemplate />
      ) : (
        <div className={styles.list}>
          {countries.map((country, index) => (
            <CountryCard countryInfo={country} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryList;
