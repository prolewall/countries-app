"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import Button from "@/components/Button/button";

import BackIcon from "./back.svg";
import styles from "./page.module.css";

export default function CountryDetailsPage({
  params,
}: {
  params: { countryCode: string };
}) {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.actions}>
        <Button
          onClickCallback={() => router.back()}
          icon={<BackIcon style={{ width: "100%", height: "100%" }} />}
          text="Back"
        />
      </div>
    </main>
  );
}
