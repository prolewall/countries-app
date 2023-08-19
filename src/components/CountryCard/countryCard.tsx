import Image from "next/image";
import { FC } from "react";

import { CountryInfo } from "@/domain/types";

import styles from "./countryCard.module.css";

interface CountryCardProps {
  countryInfo: CountryInfo;
}

const CountryCard: FC<CountryCardProps> = ({ countryInfo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.flagImage}>
        <Image
          src={countryInfo.flagImageUrl}
          alt={`Flag of ${countryInfo.name}`}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>{countryInfo.name}</div>
        <div className={styles.details}>
          <p>
            <span className={styles.label}>Population:</span>{" "}
            {countryInfo.population}
          </p>
          <p>
            <span className={styles.label}>Region:</span> {countryInfo.region}
          </p>
          <p>
            <span className={styles.label}>Capital:</span> {countryInfo.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
