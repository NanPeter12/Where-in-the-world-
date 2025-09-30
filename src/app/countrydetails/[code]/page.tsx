import BackBtn from "_/app/_Components/BackBtn/BackBtn";
import CountryCard from "_/app/_Components/CountryCard/CountryCard";
import { CountryDetailsss, Props } from "_/app/Interfaces/types";
import { getDetailedCountryByBorderName, getSpecifiedCountry } from "_/app/services/countries-services";

export default async function CountryDetails({ params }: Props) {
  const country: CountryDetailsss = await getSpecifiedCountry(params.code);

  const nativeName =
    country.name?.nativeName
      ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
      : country.name.common;

  const currencies =
    country.currencies
      ? Object.keys(country.currencies).map((key) => country.currencies![key].name).join(", ")
      : "N/A";

  const languages =
    country.languages
      ? Object.keys(country.languages).map((key) => country.languages![key]).join(", ")
      : "N/A";

  let bordersData: CountryDetailsss[] = [];

  if (country.borders && country.borders.length > 0) {
    bordersData = await getDetailedCountryByBorderName(country.borders);
  }


  return (
    <main className="container mx-auto px-4 py-8">
      <BackBtn />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src={country.flags.svg || country.flags.png || "/placeholder.png"}
          alt={country.name.common}
          className="w-full max-w-lg shadow-md rounded"
        />

        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p><b>Native Name:</b> {nativeName}</p>
              <p><b>Population:</b> {country.population.toLocaleString()}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Sub Region:</b> {country.subregion || "N/A"}</p>
              <p><b>Capital:</b> {country.capital?.[0] || "N/A"}</p>
            </div>

            <div className="space-y-2">
              <p><b>Top Level Domain:</b> {country.tld?.join(", ") || "N/A"}</p>
              <p><b>Currencies:</b> {currencies}</p>
              <p><b>Languages:</b> {languages}</p>
            </div>
          </div>

          {bordersData.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Border Countries:</h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {bordersData.map((border: CountryDetailsss) => (
                  <CountryCard
                    key={border.cca3}
                    code={border.cca3}
                    flag={border.flags?.svg || border.flags?.png}
                    name={border.name.common}
                    population={border.population}
                    region={border.region}
                    capital={border.capital ? border.capital[0] : "N/A"}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
