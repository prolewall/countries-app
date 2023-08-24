import { CountryInfo } from "@/domain/types";

type APICountryInfo = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  flags: {
    svg: string;
    alt: string;
  };
  cca3: string;
  capital: Array<string>;
};

const API_BASE = "https://restcountries.com/v3.1" as const;
const BASIC_FIELDS = "name,population,region,capital,cca3,flags" as const;

function determineEndpoint(searchValue: string, regionFilter: string): string {
  if (searchValue) {
    return `name/${searchValue}`;
  } else if (regionFilter === "") {
    return "all";
  } else {
    return `region/${regionFilter}`;
  }
}

function mapToDomainCountryInfo(country: APICountryInfo) {
  return {
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital.at(0) ?? "",
    code: country.cca3,
    flagImageUrl: country.flags.svg,
  };
}

export async function getCountriesList(
  searchValue: string,
  regionFilter: string
): Promise<Array<CountryInfo>> {
  const endpoint = determineEndpoint(searchValue, regionFilter);

  const response = await fetch(
    `${API_BASE}/${endpoint}?fields=${BASIC_FIELDS}`
  );
  if (response.ok) {
    const data: Array<APICountryInfo> = await response.json();

    return data.map(mapToDomainCountryInfo);
  } else if (response.status === 404) {
    return [];
  } else {
    throw new Error("Something went wrong");
  }
}
