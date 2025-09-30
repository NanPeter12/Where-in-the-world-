import { CountryCardProps } from "_/app/Interfaces/types";
import Link from "next/link";
import React from "react";



export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
  code
}: CountryCardProps) {
  return (
    <Link href={`/countrydetails/${code}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
        {/* Flag */}
        <img
          src={flag}
          alt={`${name} flag`}
          className="w-full h-40 object-cover"
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
            {name}
          </h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <span className="font-semibold">Population:</span>{" "}
              {population.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold">Region:</span> {region}
            </li>
            <li>
              <span className="font-semibold">Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
