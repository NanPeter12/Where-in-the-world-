import { Country, CountryDetailsss } from "../Interfaces/types";

export async function getAllCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/independent?status=true",
    {
      cache: "no-store",
    }
  );
  const countries = await res.json();
  return countries;
}

export async function getSpecifiedCountry(
  code: string
): Promise<CountryDetailsss> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data[0];
}

export async function getDetailedCountryByBorderName(
  borders: string[]
): Promise<CountryDetailsss[]> {

  if (!borders || borders.length === 0) return [];

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`,
    { cache: "no-store" }
  );

  const bordersData: CountryDetailsss[] = await res.json();
  console.log("bordersData",bordersData);
  return bordersData;
}
