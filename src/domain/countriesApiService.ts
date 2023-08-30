import {
  BorderCountryInfo,
  CountryInfo,
  DetailCountryInfo,
  mapToDomainCountryDetails,
  mapToDomainCountryInfo,
} from "@/domain/types";

import { ApiCountry } from "./apiTypes";

const API_BASE = "https://restcountries.com/v3.1" as const;
const COUNTRY_INFO_FIELDS =
  "name,population,region,capital,cca3,flags" as const;

const COUNTRY_DETAILS_FIELDS =
  "name,population,region,capital,cca3,flags,tld,currencies,subregion,languages,borders" as const;

const BORDER_COUNTRIES_FIELDS = "cca3,name" as const;

function determineEndpoint(searchValue: string, regionFilter: string): string {
  if (searchValue) {
    return `name/${searchValue}`;
  } else if (regionFilter === "") {
    return "all";
  } else {
    return `region/${regionFilter}`;
  }
}

export async function getCountriesList(
  searchValue: string,
  regionFilter: string
): Promise<Array<CountryInfo>> {
  const endpoint = determineEndpoint(searchValue, regionFilter);

  const response = await fetch(
    `${API_BASE}/${endpoint}?fields=${COUNTRY_INFO_FIELDS}`
  );
  if (response.ok) {
    const data: Array<ApiCountry> = await response.json();

    return data.map(mapToDomainCountryInfo);
  } else if (response.status === 404) {
    return [];
  } else {
    throw new Error("Something went wrong");
  }
}

export async function getCountryDetails(
  code: string
): Promise<DetailCountryInfo> {
  const response = await fetch(
    `${API_BASE}/alpha/${code}?fields=${COUNTRY_DETAILS_FIELDS}`
  );
  if (response.ok) {
    const data: ApiCountry = await response.json();

    const borderCountries = await getBorderCountries(data.borders);

    return mapToDomainCountryDetails(data, borderCountries);
  } else if (response.status === 404) {
    throw new Error("Country not found");
  } else if (response.status === 400) {
    throw new Error("Invalid country code");
  } else {
    throw new Error("Something went wrong");
  }
}

async function getBorderCountries(
  codes: string[]
): Promise<BorderCountryInfo[]> {
  if (codes.length === 0) {
    return [];
  }
  const requestCodes = codes.join(",");
  // currently there is a bug in Countries API where ?fields do not work properly in combination with ?codes
  // selected fields are ignored and all fields are fetched instead
  const response = await fetch(
    `${API_BASE}/alpha/?codes=${requestCodes}&?fields=${BORDER_COUNTRIES_FIELDS}`
  );
  if (response.ok) {
    const data: ApiCountry[] = await response.json();

    return data.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));
  } else {
    throw new Error("Something went wrong");
  }
}
