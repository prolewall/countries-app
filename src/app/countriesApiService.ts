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

function determineEndpoint(regionFilter: string): string {
  if (regionFilter === "") {
    return "all";
  } else {
    return `region/${regionFilter}`;
  }
}

export async function getCountriesList(
  regionFilter: string
): Promise<Array<CountryInfo>> {
  const endpoint = determineEndpoint(regionFilter);

  const response = await fetch(
    `${API_BASE}/${endpoint}?fields=${BASIC_FIELDS}`
  );
  const data: Array<APICountryInfo> = await response.json();

  return data.map((country) => {
    return {
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital.at(0) ?? "",
      code: country.cca3,
      flagImageUrl: country.flags.svg,
    };
  });
}
