"use client";

import { useCallback, useEffect, useState } from "react";

import CountryList from "@/components/CountryList/countryList";
import Dropdown from "@/components/Dropdown/dropdown";
import SearchInput from "@/components/SearchInput/searchInput";

import { CountryInfo } from "@/domain/types";

import { getCountriesList } from "./countriesApiService";
import styles from "./page.module.css";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"] as const;

export default function Home() {
  const [countries, setCountries] = useState<Array<CountryInfo>>([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const countries = await getCountriesList(searchValue, regionFilter);
      setCountries(countries);
      setLoading(false);
    };
    fetchCountries().catch(console.error);
  }, [searchValue, regionFilter]);

  return (
    <main className={styles.main}>
      <div className={styles.listOptions}>
        <SearchInput
          placeholderText="Search for a country..."
          searchCallback={setSearchValue}
        />
        <Dropdown
          placeholder="Filter by region"
          values={REGIONS}
          onChange={setRegionFilter}
        />
      </div>
      <div className={styles.content}>
        <CountryList countries={countries} loading={loading} />
      </div>
    </main>
  );
}
