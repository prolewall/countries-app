"use client";

import { useCallback, useEffect, useState } from "react";

import CountryList from "@/components/CountryList/countryList";
import Dropdown from "@/components/Dropdown/dropdown";

import { CountryInfo } from "@/domain/types";

import { getCountriesList } from "./countriesApiService";
import styles from "./page.module.css";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"] as const;

export default function Home() {
  const [countries, setCountries] = useState<Array<CountryInfo>>([]);
  const [regionFilter, setRegionFilter] = useState<string>("");

  const onDropdownValueChange = useCallback((newValue: string) => {
    setRegionFilter(newValue);
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountriesList(regionFilter);
      setCountries(countries);
    };
    fetchCountries().catch(console.error);
  }, [regionFilter]);

  return (
    <div className={styles.main}>
      <div className={styles.listOptions}>
        <Dropdown
          placeholder="Filter by region"
          values={REGIONS}
          onChange={onDropdownValueChange}
        />
      </div>

      <CountryList countries={countries} />
    </div>
  );
}
