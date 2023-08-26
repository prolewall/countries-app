import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { DetailCountryInfo } from "@/domain/types";
import { formatNumber } from "@/domain/utils";

import Button from "../Button/button";
import styles from "./countryDetails.module.css";

interface CountryDetailsProps {
  country: DetailCountryInfo;
}

function formatArrayToString(values: string[]): string {
  return values.join(", ");
}

const CountryDetails: FC<CountryDetailsProps> = ({ country }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.flagContainer}>
        <Image
          src={country.flagImageUrl}
          alt={`Flag of ${country.name}`}
          fill={true}
          className={styles.flagImage}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{country.name}</h2>
        <div className={styles.properties}>
          <div className={styles.propertyGroup}>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Native Name:</span>{" "}
              {country.nativeName}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Population:</span>{" "}
              {formatNumber(country.population)}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Region:</span>{" "}
              {country.region}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Sub Region:</span>{" "}
              {country.subregion}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Capital:</span>{" "}
              {country.capital}
            </p>
          </div>
          <div className={styles.propertyGroup}>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Top Level Domain:</span>{" "}
              {formatArrayToString(country.topLevelDomain)}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Currencies:</span>{" "}
              {formatArrayToString(country.currencies)}
            </p>
            <p className={styles.property}>
              <span className={styles.propertyLabel}>Languages:</span>{" "}
              {formatArrayToString(country.languages)}
            </p>
          </div>
        </div>
        <div className={styles.borderCountries}>
          <p className={styles.propertyLabel}>Border countries: </p>
          {country.borderCountries.length === 0
            ? "None"
            : country.borderCountries.map((borderCountry, index) => (
                <Button
                  key={index}
                  onClickCallback={() =>
                    router.push(`/country/${borderCountry.code}`)
                  }
                  text={borderCountry.name}
                ></Button>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
