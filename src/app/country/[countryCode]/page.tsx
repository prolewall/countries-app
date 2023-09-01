"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/Button/button";
import CountryDetails from "@/components/CountryDetails/countryDetails";
import LoadingTemplate from "@/components/LoadingTemplate/loadingTemplate";

import { getCountryDetails } from "@/domain/countriesApiService";
import { DetailCountryInfo } from "@/domain/types";

import BackIcon from "./back.svg";
import styles from "./page.module.css";

export default function CountryDetailsPage({
  params,
}: {
  params: { countryCode: string };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<DetailCountryInfo | undefined>();

  useEffect(() => {
    setLoading(true);
    const fetchCountry = async () => {
      const country = await getCountryDetails(params.countryCode);
      setCountry(country);
      setLoading(false);
    };
    fetchCountry().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, [params]);

  return (
    <main className={styles.main}>
      <div className={styles.actions}>
        <Button
          onClickCallback={() => router.back()}
          icon={<BackIcon style={{ width: "20px", height: "20px" }} />}
          text="Back"
        />
      </div>
      <div className={styles.content}>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : loading || !country ? (
          <LoadingTemplate />
        ) : (
          <CountryDetails country={country} />
        )}
      </div>
    </main>
  );
}
