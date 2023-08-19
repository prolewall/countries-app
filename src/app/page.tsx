"use client";

import { useEffect, useState } from "react";

import CountryList from "@/components/CountryList/countryList";

import { CountryInfo } from "@/domain/types";

import { getCountriesList } from "./countriesApiService";
import styles from "./page.module.css";

export default function Home() {
  const [countries, setCountries] = useState<Array<CountryInfo>>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountriesList();
      setCountries(countries);
    };
    fetchCountries().catch(console.error);
  }, []);

  return (
    <main className={styles.main}>
      <CountryList countries={countries} />
    </main>
  );
}
