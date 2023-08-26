import { ApiCountry } from "./apiTypes";
import { getFirstRecordValue, getRecordValues } from "./utils";

export type CountryInfo = {
  name: string;
  population: number;
  region: string;
  capital: string;
  code: string;
  flagImageUrl: string;
};

export function mapToDomainCountryInfo(country: ApiCountry): CountryInfo {
  return {
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital.at(0) ?? "",
    code: country.cca3,
    flagImageUrl: country.flags.svg,
  };
}

export type BorderCountryInfo = {
  name: string;
  code: string;
};

export type DetailCountryInfo = {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  code: string;
  flagImageUrl: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: BorderCountryInfo[];
};

export function mapToDomainCountryDetails(
  country: ApiCountry,
  borderCountries: BorderCountryInfo[]
): DetailCountryInfo {
  return {
    name: country.name.common,
    nativeName: getFirstRecordValue(country.name.nativeName)?.common ?? "",
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital.at(0) ?? "",
    code: country.cca3,
    flagImageUrl: country.flags.svg,
    topLevelDomain: country.tld,
    currencies: getRecordValues(country.currencies).map(
      (currency) => currency.name
    ),
    languages: getRecordValues(country.languages),
    borderCountries: borderCountries,
  };
}
