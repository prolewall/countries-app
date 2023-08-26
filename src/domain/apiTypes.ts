export type ApiCurrency = {
  name: string;
  symbol: "$";
};

export type ApiNativeName = {
  official: string;
  common: string;
};

export type ApiCountry = {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, ApiNativeName>;
  };

  tld: string[];
  cca3: string;
  currencies: Record<string, ApiCurrency>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  population: 128932753;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
