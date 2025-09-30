"use client";

import { useState } from "react";
import InputForSearch from "../InputForSearch/InputForSearch";
import CountryCard from "../CountryCard/CountryCard";
import { Country, SearchWrapperProps } from "_/app/Interfaces/types";



export default function SearchWrapper({ countries }: SearchWrapperProps) {
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);

    return (
        <>
            <InputForSearch countries={countries} onFilter={setFilteredCountries} />

            <div
                className="
          grid
          gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
            >
                {filteredCountries.map((country) => (
                    <CountryCard
                        key={country.cca3}
                        code={country.cca3}
                        flag={country.flags?.png || country.flags?.svg}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital ? country.capital[0] : "N/A"}
                    />
                ))}
            </div>
        </>
    );
}
