export type CountryCardProps = {
  code: string
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type Country = {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  capital?: string[];
};

export type InputForSearchProps = {
  countries: Country[];
  onFilter: (filtered: Country[]) => void;
};

export type SearchWrapperProps = {
  countries: Country[];
};

// types/country.ts
export interface  CountryDetailsss {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    svg?: string;
    png?: string;
    alt?: string;
  };
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
}
