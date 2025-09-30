"use client";

import { Country, InputForSearchProps, } from "_/app/Interfaces/types";
import { Input } from "_/components/ui/input";
import { useState } from "react";



export default function InputForSearch({ countries, onFilter }: InputForSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    onFilter(filtered);
  };

  return (
    <div className="flex justify-center mb-6">
      <Input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full md:w-3/4 lg:w-1/2"
      />
    </div>
  );

}
