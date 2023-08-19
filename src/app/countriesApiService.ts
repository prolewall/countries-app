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

export async function getCountriesList(): Promise<Array<CountryInfo>> {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,cca3,flags"
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
