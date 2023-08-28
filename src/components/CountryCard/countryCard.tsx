import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";

import { CountryInfo } from "@/domain/types";
import { formatNumber } from "@/domain/utils";

import styles from "./countryCard.module.css";

interface CountryCardProps {
  countryInfo: CountryInfo;
}

const CountryCard: FC<CountryCardProps> = ({ countryInfo }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/country/${countryInfo.code}`);
  }, [router, countryInfo]);

  const handleKeyboardEvent = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <div
      className={styles.card}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyboardEvent}
    >
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
            {formatNumber(countryInfo.population)}
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
